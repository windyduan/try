import test from 'node:test';
import assert from 'node:assert/strict';
import {models,selectModelReleases} from '../src/model-history.js';
import {parseProgress,progressRecord} from '../src/graph-math.js';
import {readableTopic,shortNames} from '../src/reader-editorial.js';
const dateLimit='2026-10-04';
test('Twelve model families cover the requested six and have dated 2026 milestones',()=>{
 assert.equal(models.length,12);assert.equal(new Set(models.map(m=>m.id)).size,12);
 for(const id of ['glm','kimi','minimax','mimo','grok','meta'])assert.ok(models.some(m=>m.id===id));
 for(const m of models){assert.ok(m.releases.some(r=>r.date.startsWith('2026')));assert.ok(m.sources.length);assert.ok(m.icon);for(const r of m.releases){assert.match(r.date,/^\d{4}-\d{2}(?:-\d{2})?$/);assert.ok(r.date<=dateLimit);assert.equal(r.datePrecision,r.date.length===10?'day':'month');assert.ok(r.license&&r.sources.length);assert.ok(r.brief.zh&&r.brief.en);assert.ok(!/[\u3400-\u9fff]/.test(r.brief.en));r.sources.forEach(s=>assert.ok(s.url.startsWith('https://')));}assert.ok(!/[\u3400-\u9fff]/.test(m.mechanism.en+m.boundary.en));}
});
test('Access filters apply to the actual releases in the selected year',()=>{
 const weights=selectModelReleases(models,{year:'2026',access:'weights'});
 assert.ok(!weights.some(m=>m.id==='meta'));assert.ok(!weights.some(m=>m.id==='anthropic'));
 assert.ok(weights.some(m=>m.id==='google'&&m.visibleReleases.some(r=>r.name==='Gemma 4')));
 weights.forEach(m=>m.visibleReleases.forEach(r=>{assert.ok(r.date.startsWith('2026'));assert.ok(['weights','both'].includes(r.access));}));
 assert.ok(selectModelReleases(models,{year:'2025',access:'weights'}).some(m=>m.id==='meta'));
});
test('Licensing remains attached to releases rather than inherited across a provider',()=>{
 const mini=models.find(m=>m.id==='minimax');assert.equal(mini.releases.find(r=>r.name==='MiniMax M2.7').license,'Non-commercial License');
 assert.equal(mini.releases.find(r=>r.name==='MiniMax M3').license,'minimax-community');
 assert.equal(models.find(m=>m.id==='glm').releases.at(-1).license,'GLM-5.3 License');
 assert.equal(models.find(m=>m.id==='google').releases.find(r=>r.name==='Gemma 4').license,'Apache 2.0');
});
test('Month precision and weight-release dates remain explicit',()=>{
 const q=models.find(m=>m.id==='qwen').releases.find(r=>r.name.includes('Qwen3.8-Max'));assert.equal(q.date,'2026-08');assert.equal(q.datePrecision,'month');
 const k=models.find(m=>m.id==='kimi').releases.at(-1);assert.equal(k.date,'2026-07-27');assert.equal(k.kind,'weights');
});
test('V5 progress exports roundtrip and accept older backups',()=>{
 const ids=['neural','rag'];assert.deepEqual(parseProgress(progressRecord(['neural','neural','rag']),ids),ids);assert.equal(progressRecord([]).version,5);
 for(const version of [2,3,4,5])assert.deepEqual(parseProgress({version,learned:['rag','unknown','rag']},ids),['rag']);
});
test('Editorial changes preserve computation, IDs, links and source objects',()=>{
 const source={id:'context',name:'old',formula:'x+y',experiment:'calculation',related:['rag'],sources:[{url:'https://example.org'}],boundary:'old'};
 const result=readableTopic(source,'en');assert.equal(result.name,shortNames.context.en);assert.equal(result.id,source.id);assert.equal(result.formula,source.formula);assert.equal(result.experiment,source.experiment);assert.equal(result.related,source.related);assert.equal(result.sources,source.sources);
 const unchanged=readableTopic({...source,id:'other'},'zh');assert.equal(unchanged.name,'old');
});
