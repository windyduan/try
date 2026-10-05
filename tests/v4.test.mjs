import test from 'node:test';
import assert from 'node:assert/strict';
import {fibonacciSphere,rotatePoint,projectPoint,sphereArc,parseProgress,quantize} from '../src/graph-math.js';
import {fieldGuide,fieldGroups} from '../src/field-guide.js';
import {readFile} from 'node:fs/promises';

test('Knowledge points lie on a sphere and rotation preserves radius',()=>{const p=fibonacciSphere(44);assert.equal(p.length,44);p.forEach(v=>{assert.ok(Math.abs(Math.hypot(...v)-1)<1e-12);assert.ok(Math.abs(Math.hypot(...rotatePoint(v,.7,-.4))-1)<1e-12);});});
test('Perspective distinguishes front and back without a singularity',()=>{const a=projectPoint([1,0,1],{radius:100}),b=projectPoint([1,0,-1],{radius:100});assert.ok(a.x>b.x);fibonacciSphere(44).forEach(p=>Object.values(projectPoint(p)).forEach(n=>assert.ok(Number.isFinite(n))));});
test('Curved links meet their actual endpoints',()=>{const [a,b]=fibonacciSphere(2);[sphereArc(a,b,0),sphereArc(a,b,1)].forEach((p,i)=>p.forEach((n,j)=>assert.ok(Math.abs(n-[a,b][i][j])<1e-10)));});
test('Progress import excludes unknown ids and deduplicates valid items',()=>{assert.deepEqual(parseProgress({version:2,learned:['neural','wrong','neural',9,'rag']},['neural','rag']),['neural','rag']);assert.throws(()=>parseProgress({version:1,learned:['neural']},['neural']));assert.deepEqual(parseProgress({version:3,learned:['neural']},['neural']),['neural']);assert.deepEqual(parseProgress({version:4,learned:['neural']},['neural']),['neural']);assert.throws(()=>parseProgress('{',[]));});
test('Increasing uniform quantization precision reduces error on the teaching values',()=>{const values=[-.94,-.72,-.4,-.15,.12,.37,.68,.91];assert.ok(quantize(values,8).mse<quantize(values,4).mse);assert.equal(quantize(values,4).levels,16);assert.ok(quantize(values,4).approx.every(x=>x>=-1&&x<=1));});
test('Twenty extra topics have bilingual maps, flows and primary sources',()=>{assert.equal(fieldGuide.length,20);assert.equal(new Set(fieldGuide.map(t=>t.id)).size,20);for(const t of fieldGuide){assert.ok(fieldGroups.some(g=>g.id===t.group));assert.equal(t.nodes.length,3);assert.equal(t.process.length,4);assert.ok(t.sources.length);[t.name,t.summary,t.joke,t.analogy,t.boundary,t.practice,...t.nodes.flatMap(n=>[n.name,n.detail]),...t.process.flatMap(s=>[s.name,s.detail,s.input,s.output])].forEach(p=>{assert.ok(p.zh&&p.en);assert.ok(!/[\u3400-\u9fff]/.test(p.en),t.id);});t.sources.forEach(s=>assert.ok(s.url.startsWith('https://')));}});

test('All 44 concepts follow the navigation order and link to existing bilingual concepts',async()=>{
 const read=name=>readFile(new URL(`../src/${name}`,import.meta.url),'utf8');
 const importText=source=>import(`data:text/javascript;base64,${Buffer.from(source).toString('base64')}`);
 const content=await importText((await read('content.js')).replace("import originals from './originals.json';",`const originals=${await read('originals.json')};`));
 const english=await importText((await read('english.js')).replace("import { lessons } from './content.js';",`const lessons=${JSON.stringify(content.lessons)};`));
 const learning=await importText((await read('learning.js')).replace("import {lessons,groups,originalSections} from './content.js';",`const lessons=${JSON.stringify(content.lessons)},originalSections=${JSON.stringify(content.originalSections)};`).replace("import {englishLessons} from './english.js';",`const englishLessons=${JSON.stringify(english.englishLessons)};`).replace("import {fieldGuide,fieldGroups} from './field-guide.js';",`const fieldGuide=${JSON.stringify(fieldGuide)},fieldGroups=${JSON.stringify(fieldGroups)};`));
 const expected=learning.learningGroups.flatMap(g=>g.ids),known=new Set(expected);
 assert.equal(expected.length,44);assert.equal(known.size,44);
 for(const lang of ['zh','en']){
  const topics=learning.getTopics(lang);assert.deepEqual(topics.map(t=>t.id),expected);
  for(const t of topics){
   assert.ok(t.name&&t.summary&&t.joke&&t.analogy&&t.boundary&&t.practice,t.id);assert.equal(t.nodes.length,3);assert.ok(t.sources.length);
   if(lang==='en')assert.ok(!/[\u3400-\u9fff]/.test([t.name,t.joke,t.analogy,t.boundary,t.practice,...t.nodes.flatMap(n=>[n.name,n.detail])].join(' ')),t.id);
   [...t.related,...t.nodes.map(n=>n.link).filter(Boolean)].forEach(id=>assert.ok(known.has(id),`${t.id} -> ${id}`));
   (t.paragraphs??[]).forEach(p=>[...p.matchAll(/\[\[([^|]+)\|/g)].forEach(m=>assert.ok(known.has(m[1]),m[1])));
  }
 }
});
