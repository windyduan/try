import React,{useState,useRef,useEffect} from 'react';
import {CloudRain,Waves,Bird,Droplets,Wind,Play,Pause,X,Shuffle,SkipForward,Volume2,ArrowUpRight,Headphones} from 'lucide-react';
import {natureTracks,advancePlaylist} from './nature-audio.js';
import {publicAsset} from './site-config.js';
const icons={rain:CloudRain,waves:Waves,birds:Bird,water:Droplets,wind:Wind};
const ids=natureTracks.map(t=>t.id);
const stored=(key,fallback)=>{try{return localStorage.getItem(key)??fallback;}catch{return fallback;}};
const remember=(key,value)=>{try{localStorage.setItem(key,String(value));}catch{}};

export default function NatureSound({language,tx}){
 const [open,setOpen]=useState(false),[selected,setSelected]=useState(()=>ids.includes(stored('try-v5-sound','rain'))?stored('try-v5-sound','rain'):'rain');
 const [status,setStatus]=useState('idle'),[shuffle,setShuffle]=useState(()=>stored('try-v5-sound-shuffle','true')!=='false'),[volume,setVolume]=useState(()=>Math.min(1,Math.max(0,Number(stored('try-v5-volume','.4'))||0)));
 const root=useRef(null),panelButton=useRef(null),first=useRef(null),second=useRef(null),active=useRef(0),running=useRef(false),current=useRef(selected),bag=useRef([]),level=useRef(volume),random=useRef(shuffle),fade=useRef(null),generation=useRef(0),switching=useRef(false);
 const nodes=()=>[first.current,second.current];
 const clearFade=()=>{if(fade.current)clearInterval(fade.current);fade.current=null;switching.current=false;};
 const fail=()=>{generation.current++;clearFade();running.current=false;nodes().forEach(n=>n?.pause());setStatus('error');};
 useEffect(()=>{level.current=volume;if(!switching.current){const n=nodes()[active.current];if(n)n.volume=volume;}remember('try-v5-volume',volume);},[volume]);
 useEffect(()=>{random.current=shuffle;bag.current=[];remember('try-v5-sound-shuffle',shuffle);},[shuffle]);
 useEffect(()=>{remember('try-v5-sound',selected);},[selected]);
 useEffect(()=>()=>{generation.current++;clearFade();running.current=false;nodes().forEach(n=>{n?.pause();n?.removeAttribute('src');n?.load();});},[]);
 useEffect(()=>{if(!open)return;const outside=e=>{if(!root.current?.contains(e.target))setOpen(false);},key=e=>{if(e.key==='Escape'){setOpen(false);panelButton.current?.focus();}};document.addEventListener('pointerdown',outside);document.addEventListener('keydown',key);return()=>{document.removeEventListener('pointerdown',outside);document.removeEventListener('keydown',key);};},[open]);
 const start=async id=>{
  const token=++generation.current;clearFade();nodes().forEach(n=>n?.pause());
  const n=nodes()[active.current];if(!n)return;
  const source=publicAsset(natureTracks.find(t=>t.id===id).src);
  if(n.getAttribute('src')!==source){n.src=source;n.currentTime=0;}
  current.current=id;setSelected(id);n.volume=level.current;running.current=true;setStatus('loading');
  try{await n.play();if(token!==generation.current){n.pause();return;}setStatus('playing');}catch{if(token===generation.current)fail();}
 };
 const toggle=()=>{if(running.current){generation.current++;clearFade();nodes().forEach(n=>n?.pause());running.current=false;setStatus('idle');}else start(current.current);};
 const choose=id=>{bag.current=[];current.current=id;setSelected(id);const n=nodes()[active.current];if(n){n.removeAttribute('src');n.load();}start(id);};
 const nextId=manual=>{
  if(!random.current)return manual?ids[(ids.indexOf(current.current)+1)%ids.length]:current.current;
  const next=advancePlaylist(bag.current,ids,current.current);bag.current=next.queue;return next.id;
 };
 const transition=async(manual=false)=>{
  if(switching.current||!running.current)return;
  switching.current=true;const token=++generation.current,id=nextId(manual),old=nodes()[active.current],newSlot=1-active.current,n=nodes()[newSlot];
  n.src=publicAsset(natureTracks.find(t=>t.id===id).src);n.currentTime=0;n.volume=0;
  try{
   await n.play();if(token!==generation.current){n.pause();return;}
   current.current=id;setSelected(id);setStatus('playing');
   const since=performance.now();fade.current=setInterval(()=>{
    if(token!==generation.current){clearFade();return;}
    const t=Math.min(1,(performance.now()-since)/800);old.volume=level.current*(1-t);n.volume=level.current*t;
    if(t===1){old.pause();old.volume=0;active.current=newSlot;clearFade();}
   },60);
  }catch{if(token===generation.current)fail();}
 };
 const track=natureTracks.find(t=>t.id===selected),Icon=icons[selected],playing=status==='playing'||status==='loading';
 const tick=(e,slot)=>{const n=e.currentTarget;if(slot===active.current&&running.current&&!switching.current&&Number.isFinite(n.duration)&&n.duration-n.currentTime<.85)transition();};
 return <div className="nature-dock" ref={root}>
  <audio ref={first} preload="none" onTimeUpdate={e=>tick(e,0)} onEnded={()=>{if(active.current===0)transition();}} onError={()=>{if(active.current===0&&running.current)fail();}}/>
  <audio ref={second} preload="none" onTimeUpdate={e=>tick(e,1)} onEnded={()=>{if(active.current===1)transition();}} onError={()=>{if(active.current===1&&running.current)fail();}}/>
  {open&&<section className="nature-panel" aria-label={tx('自然环境音','Nature audio')}><header><strong><Headphones size={17}/>{tx('自然环境音','Nature audio')}</strong><button className="v4-icon" aria-label={tx('关闭环境音面板','Close nature panel')} onClick={()=>{setOpen(false);panelButton.current?.focus();}}><X size={18}/></button></header>
   <div className="nature-choices" role="group" aria-label={tx('选择环境音','Choose a recording')}>{natureTracks.map(t=>{const Item=icons[t.id];return <button key={t.id} aria-pressed={selected===t.id} onClick={()=>choose(t.id)}><Item size={22}/><span>{t.name[language]}</span></button>;})}</div>
   <p className="nature-description">{track.description[language]}</p>
   <div className="nature-settings"><button className="shuffle-button" aria-pressed={shuffle} onClick={()=>setShuffle(!shuffle)}><Shuffle size={15}/>{shuffle?tx('随机播放','Shuffle'):tx('循环这一种','Loop this sound')}</button><button className="v4-icon" disabled={!playing} aria-label={tx('下一种声音','Next recording')} onClick={()=>transition(true)}><SkipForward size={18}/></button></div>
   <label className="nature-volume"><Volume2 size={17}/><span>{tx('音量','Volume')}</span><input type="range" min="0" max="1" step=".02" value={volume} aria-label={tx('环境音音量','Nature audio volume')} onChange={e=>setVolume(Number(e.target.value))}/><output>{Math.round(volume*100)}%</output></label>
   <div className="nature-credit"><a href={track.source} target="_blank" rel="noreferrer">{track.author}<ArrowUpRight size={11}/></a><a href={track.licenseUrl} target="_blank" rel="noreferrer">{track.license}</a><span>{tx('实录 · 已转码并统一响度','Field recording · transcoded & normalized')}</span></div>
  </section>}
  {status==='error'&&<p className="nature-error" role="alert">{tx('环境音未能播放，点击重试。','Audio did not play. Tap to retry.')}</p>}
  <div className={'nature-pill '+(playing?'playing':'')}><button ref={panelButton} className="nature-selector" aria-expanded={open} aria-label={tx('打开自然环境音设置','Open nature audio settings')} onClick={()=>setOpen(!open)}><Icon size={20}/><span>{playing?track.name[language]:tx('自然声','Nature')}</span>{playing&&<i className="sound-meter" aria-hidden="true"><b/><b/><b/></i>}</button><button className="nature-play" aria-label={playing?tx('暂停环境音','Pause nature audio'):tx('播放环境音','Play nature audio')} onClick={toggle}>{playing?<Pause size={17}/>:<Play size={17}/>}</button></div>
 </div>;
}

export function NatureCredits({language,tx}){
 return <section className="nature-sources"><h2>{tx('自然录音与许可','Nature recordings & licenses')}</h2><p>{tx('感谢以下录音作者。素材转为 MP3 并统一响度，切换时淡入淡出；海浪素材按 CC BY 4.0 署名使用。','Thanks to the recording authors below. Files were transcoded to MP3 and loudness normalized, with playback crossfades. The wave recording is credited under CC BY 4.0.')}</p><div>{natureTracks.map(t=>{const Icon=icons[t.id];return <div key={t.id}><Icon size={20}/><span><strong>{t.name[language]}</strong><a href={t.source} target="_blank" rel="noreferrer">{t.author} · Freesound<ArrowUpRight size={11}/></a><a href={t.licenseUrl} target="_blank" rel="noreferrer">{t.license}</a></span></div>;})}</div></section>;
}
