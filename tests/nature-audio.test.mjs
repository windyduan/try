import test from 'node:test';
import assert from 'node:assert/strict';
import {natureTracks,shuffleBag,advancePlaylist} from '../src/nature-audio.js';
import {stat} from 'node:fs/promises';
const ids=natureTracks.map(t=>t.id);
test('Shuffle covers every nature recording once per bag',()=>{
 for(let i=0;i<100;i++){const bag=shuffleBag(ids,'rain');assert.equal(new Set(bag).size,5);assert.deepEqual([...bag].sort(),[...ids].sort());assert.notEqual(bag[0],'rain');}
});
test('Consecutive bags do not repeat at their boundary',()=>{
 let queue=[],previous='rain';const sequence=[];
 for(let i=0;i<30;i++){const next=advancePlaylist(queue,ids,previous,()=>.999);assert.notEqual(next.id,previous);sequence.push(next.id);queue=next.queue;previous=next.id;}
 for(let i=0;i<30;i+=5)assert.equal(new Set(sequence.slice(i,i+5)).size,5);
});
test('Invalid stale entries are excluded and an empty queue refills',()=>{
 const next=advancePlaylist(['removed','wind','wind'],ids,'rain',()=>0);assert.equal(next.id,'wind');assert.deepEqual(next.queue,[]);
 assert.ok(ids.includes(advancePlaylist([],ids,'wind',()=>0).id));assert.equal(advancePlaylist([],[],'rain').id,null);
});
test('Every recording has bilingual names, attribution and a local playable file',async()=>{
 for(const t of natureTracks){assert.ok(t.name.zh&&t.name.en&&t.description.en);assert.ok(t.author&&t.license);assert.ok(t.source.startsWith('https://freesound.org/people/'));assert.ok(t.licenseUrl.startsWith('https://'));const s=await stat(new URL('../public'+t.src,import.meta.url));assert.ok(s.size>10000);}
 const wave=natureTracks.find(t=>t.id==='waves');assert.equal(wave.author,'Luftrum');assert.equal(wave.license,'CC BY 4.0');
});
