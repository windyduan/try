import test from 'node:test';
import assert from 'node:assert/strict';
import {stat} from 'node:fs/promises';
import {assetPath,repositoryUrl} from '../src/site-config.js';
import {natureTracks} from '../src/nature-audio.js';
import {models} from '../src/model-history.js';

test('Public resources resolve under both /try/ and a domain root', async()=>{
  const paths=[...natureTracks.map(t=>t.src),...models.map(m=>`/icons/${m.icon}.svg`),'/licenses/caveat-OFL.txt','/licenses/lobe-icons-MIT.txt','/fonts/caveat.ttf','/favicon.svg'];
  for(const path of paths){
    assert.ok((await stat(new URL(`../public${path}`,import.meta.url))).size>0,path);
    const relative=assetPath(path);
    assert.ok(relative.startsWith('./'));
    for(const prefix of ['/','/try/']){
      const page=`https://example.org${prefix}#models`;
      assert.equal(new URL(relative,page).pathname,`${prefix}${path.slice(1)}`);
      assert.equal(new URL(assetPath(path,prefix),page).pathname,`${prefix}${path.slice(1)}`);
    }
  }
});

test('The project repository link uses the supplied GitHub account',()=>{
  assert.equal(repositoryUrl,'https://github.com/windyduan/try');
});
