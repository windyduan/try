import React,{useEffect,useMemo,useRef,useState} from 'react';
import {Plus,Minus,RotateCcw,Pause,Play,ArrowUpRight,Check,Move,Eye,Sparkles,ChevronLeft,ChevronRight,ChevronUp,ChevronDown,Maximize2,Minimize2,X} from 'lucide-react';
import {fibonacciSphere,projectPoint,sphereArc,clamp} from './graph-math.js';

export default function KnowledgeGlobe({topics,learned,onToggle,language,theme,motion,onNavigate,compact=false}){
  const tx=(zh,en)=>language==='en'?en:zh;
  const canvas=useRef(null),stage=useRef(null),view=useRef({yaw:.55,pitch:-.2,zoom:1}),pointers=useRef(new Map()),lastPinch=useRef(null),hits=useRef([]),pulse=useRef({id:null,start:0}),paintNow=useRef(null);
  const [selected,setSelected]=useState(topics.find(t=>!learned.includes(t.id))?.id??topics[0].id),[rotating,setRotating]=useState(true),[preview,setPreview]=useState(false),[zoom,setZoom]=useState(1),[hovered,setHovered]=useState(null);
  const active=topics.find(t=>t.id===selected)??topics[0];
  const [expanded,setExpanded]=useState(false);
  const exitExpanded=async()=>{try{if(document.fullscreenElement===stage.current)await document.exitFullscreen();}catch{}setExpanded(false);};
  const enterExpanded=()=>{setExpanded(true);if(stage.current?.requestFullscreen)stage.current.requestFullscreen().catch(()=>{});};
  useEffect(()=>{const fn=()=>{if(document.fullscreenElement!==stage.current)setExpanded(false);};document.addEventListener('fullscreenchange',fn);return()=>document.removeEventListener('fullscreenchange',fn);},[]);
  useEffect(()=>{
    if(!expanded)return;
    const focus=document.activeElement,overflow=document.body.style.overflow,siblings=[];
    let node=stage.current;
    while(node&&node!==document.body){const parent=node.parentElement;if(!parent)break;[...parent.children].filter(e=>e!==node).forEach(e=>{siblings.push([e,e.hasAttribute('inert')]);e.setAttribute('inert','');});node=parent;}
    document.body.style.overflow='hidden';stage.current?.querySelector('.globe-fullscreen-close')?.focus();
    const key=e=>{if(e.key==='Escape'){e.preventDefault();exitExpanded();}if(e.key==='Tab'){const controls=[...stage.current.querySelectorAll('button')].filter(e=>!e.disabled&&e.getClientRects().length);if(e.shiftKey&&document.activeElement===controls[0]){e.preventDefault();controls.at(-1)?.focus();}else if(!e.shiftKey&&document.activeElement===controls.at(-1)){e.preventDefault();controls[0]?.focus();}}};
    document.addEventListener('keydown',key);
    return()=>{document.removeEventListener('keydown',key);siblings.forEach(([e,was])=>{if(!was)e.removeAttribute('inert');});document.body.style.overflow=overflow;if(focus?.isConnected)focus.focus();};
  },[expanded]);
  const dayColors=useMemo(()=>topics.map(t=>/^#[0-9a-f]{6}$/i.test(t.color)?'#'+t.color.slice(1).match(/../g).map(c=>Math.round(parseInt(c,16)*.6).toString(16).padStart(2,'0')).join(''):t.color),[topics]);
  const points=useMemo(()=>fibonacciSphere(topics.length),[topics.length]);
  const edges=useMemo(()=>{const seen=new Set(),result=[];topics.forEach((t,i)=>t.related?.forEach(id=>{const j=topics.findIndex(n=>n.id===id);if(j<0||i===j)return;const key=[i,j].sort((a,b)=>a-b).join(':');if(!seen.has(key)){seen.add(key);result.push([i,j]);}}));return result;},[topics]);
  const previous=useRef(learned);
  useEffect(()=>{const newly=learned.find(id=>!previous.current.includes(id));if(newly)pulse.current={id:newly,start:performance.now()};previous.current=learned;},[learned]);
  const state=useRef({});state.current={topics,learned:new Set(preview?topics.map(t=>t.id):learned),selected,hovered,theme,motion,rotating};
  useEffect(()=>{
    const el=canvas.current,ctx=el.getContext('2d');if(!ctx)return;
    let width=1,height=1,frame,last=0,dirty=true,particleTime=0;
    const resize=()=>{const r=el.getBoundingClientRect(),dpr=Math.min(window.devicePixelRatio||1,2.5);width=r.width;height=r.height;el.width=Math.round(width*dpr);el.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);dirty=true;paint(performance.now(),false);};
    const paint=(time,animate)=>{
      const s=state.current;
      const delta=Math.min(50,time-last||32);last=time;dirty=false;
      if(animate&&s.motion&&s.rotating&&!pointers.current.size){view.current.yaw+=delta*.000075;particleTime+=delta/1000;}
      const radius=Math.min(width*.37,height*.37)*view.current.zoom,cx=width/2,cy=height*.49;
      const project=p=>projectPoint(p,{...view.current,cx,cy,radius});
      ctx.clearRect(0,0,width,height);
      const dark=s.theme==='dark',ink=dark?'#b7d4ec':'#506e78';
      // Keep the original orbit; modestly increase count and daylight visibility.
      const particleCount=width<500?54:100;
      const dayParticleColors=['#008dce','#009cb0','#1da46e','#eda51c','#ed7651','#df659b','#7482d2'];
      const orbit=(i,seconds)=>{const a=i*2.399963+seconds*(.075+(i%7)*.006),tilt=(i%5-2)*.55,r=1.13+(i%4)*.07;return [r*Math.cos(a),r*Math.sin(a)*Math.cos(tilt),r*Math.sin(a)*Math.sin(tilt)];};
      for(let i=0;i<particleCount;i++){
        const q=project(orbit(i,particleTime)),tail=project(orbit(i,particleTime-1.1)),color=dark?topics[i%topics.length].color:dayParticleColors[i%dayParticleColors.length];
        ctx.globalAlpha=(dark?.46:.82)*(.4+(q.z+1.34)/2.68*.6);ctx.strokeStyle=color;ctx.lineWidth=dark?.65:1;
        ctx.beginPath();ctx.moveTo(tail.x,tail.y);ctx.lineTo(q.x,q.y);ctx.stroke();
        ctx.fillStyle=color;ctx.globalAlpha=Math.min(1,ctx.globalAlpha*1.6);ctx.shadowColor=color;ctx.shadowBlur=dark?5:0;
        ctx.beginPath();ctx.arc(q.x,q.y,(dark?(i%9===0?1.8:1.1):(i%9===0?3.2:2.2))*q.scale,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
      }
      ctx.globalAlpha=1;
      // Geographic-looking wireframe is a geometric scaffold, not a map.
      const line=pts=>{ctx.beginPath();pts.forEach((p,i)=>{const q=project(p);i?ctx.lineTo(q.x,q.y):ctx.moveTo(q.x,q.y);});ctx.stroke();};
      ctx.lineWidth=.7;ctx.strokeStyle=dark?'#6397a536':'#88a1ac2e';
      for(let m=0;m<8;m++){const lon=m*Math.PI/4;line(Array.from({length:65},(_,i)=>{const a=i/64*Math.PI*2;return [Math.cos(a)*Math.cos(lon),Math.sin(a),Math.cos(a)*Math.sin(lon)];}));}
      for(const lat of [-.75,-.4,0,.4,.75]){const r=Math.sqrt(1-lat*lat);line(Array.from({length:65},(_,i)=>{const a=i/64*Math.PI*2;return [r*Math.cos(a),lat,r*Math.sin(a)];}));}
      edges.forEach(([i,j])=>{
        const both=s.learned.has(topics[i].id)&&s.learned.has(topics[j].id),focused=[topics[i].id,topics[j].id].includes(s.selected),a=project(points[i]),b=project(points[j]);
        ctx.globalAlpha=focused?.65:both?.30:.04;ctx.strokeStyle=ink;ctx.lineWidth=focused?1.3:both?.85:.6;
        line(Array.from({length:25},(_,k)=>sphereArc(points[i],points[j],k/24,.13)));
        const newly=[topics[i].id,topics[j].id].includes(pulse.current.id),age=(time-pulse.current.start)/1700;
        if(s.motion&&(both||newly)&&(!newly||age<3)){
          const phase=newly?age%1:(time/6500+i*.19)%1,q=project(sphereArc(points[i],points[j],phase,.13));
          ctx.globalAlpha=newly?.95:.65;ctx.fillStyle=topics[i].color;ctx.shadowColor=topics[i].color;ctx.shadowBlur=0;ctx.beginPath();ctx.arc(q.x,q.y,newly?3.2:1.8,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
        }
      });
      const projected=points.map((p,i)=>({...project(p),topic:topics[i],index:i})).sort((a,b)=>a.z-b.z);hits.current=projected;
      projected.forEach(q=>{
        const lit=s.learned.has(q.topic.id),picked=q.topic.id===s.selected||q.topic.id===s.hovered,opacity=.25+(q.z+1)/2*.75;
        ctx.globalAlpha=picked?1:opacity;ctx.fillStyle=q.topic.color;if(!lit&&!picked)ctx.globalAlpha*=.55;
        if(lit||picked){ctx.shadowColor=q.topic.color;ctx.shadowBlur=dark?(picked?13:7):0;}
        ctx.beginPath();ctx.arc(q.x,q.y,(picked?7:lit?4.7:3.4)*q.scale,0,Math.PI*2);ctx.fill();ctx.shadowBlur=0;
        if(picked){ctx.lineWidth=1;ctx.strokeStyle=q.topic.color;ctx.beginPath();ctx.arc(q.x,q.y,12*q.scale,0,Math.PI*2);ctx.stroke();}
        const showLabel=picked;
        if(showLabel){const text=q.topic.name.split('：')[0].split(':')[0];ctx.font=`${picked?600:500} ${picked?14:12}px -apple-system, BlinkMacSystemFont, sans-serif`;const tw=ctx.measureText(text).width;const x=clamp(q.x-tw/2,10,width-tw-10),y=clamp(q.y+24*q.scale,20,height-8);ctx.globalAlpha=picked?1:.8;ctx.fillStyle=dark?'#0e243beb':'#fffffff0';ctx.fillRect(x-7,y-16,tw+14,23);ctx.fillStyle=dark?'#f5f2e9':'#314342';ctx.fillText(text,x,y);}
      });
      const burstAge=(time-pulse.current.start)/1650,burstIndex=topics.findIndex(t=>t.id===pulse.current.id);
      if(s.motion&&s.rotating&&burstIndex>=0&&burstAge>=0&&burstAge<1){
        const origin=project(points[burstIndex]),spread=8+(1-(1-burstAge)**3)*48*view.current.zoom,color=dark?topics[burstIndex].color:dayColors[burstIndex];
        ctx.fillStyle=color;ctx.shadowColor=color;ctx.shadowBlur=dark?7:0;
        for(let i=0;i<24;i++){const a=i*2.399963,reach=spread*(.4+(i%7)/10);ctx.globalAlpha=(1-burstAge)*(.5+(i%3)*.2);ctx.beginPath();ctx.arc(origin.x+Math.cos(a)*reach,origin.y+Math.sin(a)*reach,(dark?1.1:1.6)+(i%3)*.35,0,Math.PI*2);ctx.fill();}
        ctx.shadowBlur=0;
      }
      ctx.globalAlpha=1;
      const all=s.learned.size===topics.length;
      if(all){ctx.lineWidth=1.2;ctx.strokeStyle=dark?'#67c5e99e':'#0b91ca70';ctx.beginPath();ctx.ellipse(cx,cy,radius*1.35,radius*.33,-.22,0,Math.PI*2);ctx.stroke();}
    };
    const draw=time=>{frame=requestAnimationFrame(draw);if(document.hidden||!state.current.motion)return;if(time-last<32&&!dirty)return;paint(time,true);};
    paintNow.current=()=>paint(performance.now(),false);
    const observer=new ResizeObserver(resize);observer.observe(el);resize();
    frame=requestAnimationFrame(draw);return()=>{cancelAnimationFrame(frame);observer.disconnect();paintNow.current=null;};
  },[points,edges,compact,dayColors]);
  useEffect(()=>{paintNow.current?.();},[theme,language,learned,selected,preview,hovered,motion,rotating,zoom]);
  const setScale=n=>{view.current.zoom=clamp(n,.65,1.75);setZoom(view.current.zoom);};
  const position=e=>{const r=canvas.current.getBoundingClientRect();return {x:e.clientX-r.left,y:e.clientY-r.top};};
  const down=e=>{canvas.current.setPointerCapture(e.pointerId);pointers.current.set(e.pointerId,{...position(e),start:position(e),moved:false});};
  const move=e=>{
    const pos=position(e),old=pointers.current.get(e.pointerId);
    if(!old){const near=hits.current.findLast(q=>Math.hypot(q.x-pos.x,q.y-pos.y)<16);setHovered(near?.topic.id??null);return;}
    const next={...pos,start:old.start,moved:old.moved||Math.hypot(pos.x-old.start.x,pos.y-old.start.y)>5};pointers.current.set(e.pointerId,next);
    if(pointers.current.size===2){const [a,b]=[...pointers.current.values()],distance=Math.hypot(a.x-b.x,a.y-b.y);if(lastPinch.current)setScale(view.current.zoom*distance/lastPinch.current);lastPinch.current=distance;return;}
    view.current.yaw+=(pos.x-old.x)*.008;view.current.pitch=clamp(view.current.pitch+(pos.y-old.y)*.007,-1.2,1.2);paintNow.current?.();
  };
  const up=e=>{const old=pointers.current.get(e.pointerId),pos=position(e);if(old&&!old.moved&&pointers.current.size===1){const near=hits.current.findLast(q=>Math.hypot(q.x-pos.x,q.y-pos.y)<18);if(near)setSelected(near.topic.id);}pointers.current.delete(e.pointerId);lastPinch.current=null;};
  const wheel=e=>{e.preventDefault();setScale(view.current.zoom*Math.exp(-e.deltaY*.001));};
  useEffect(()=>{const el=canvas.current;el.addEventListener('wheel',wheel,{passive:false});return()=>el.removeEventListener('wheel',wheel);},[]);
  const full=learned.length===topics.length;
  return <div className={`knowledge-globe ${compact?'compact':''}`}>
    <div ref={stage} className={'globe-stage '+(expanded?'expanded':'')} role={expanded?'dialog':undefined} aria-modal={expanded?true:undefined} aria-label={expanded?tx('知识星球全屏预览','Fullscreen knowledge sphere'):undefined}>{expanded&&<div className="globe-fullscreen-head"><h2><Sparkles size={19}/>{tx('知识星球','Knowledge sphere')}</h2><div><button className="v4-quiet" onClick={()=>setPreview(!preview)}><Eye size={16}/>{preview?tx('真实进度','Actual progress'):tx('全亮预览','Fully lit preview')}</button><button className="globe-fullscreen-close v4-icon" aria-label={tx('关闭全屏预览','Close fullscreen preview')} onClick={exitExpanded}><X size={20}/></button></div></div>}<div className="globe-overlay"><span className="signal-dot"/><span>{preview?tx('全亮预览 · 不改变进度','Fully lit preview · Progress unchanged'):full?tx('全部点亮 · 仍可继续探索','All illuminated · Keep exploring'):tx('你的知识正在连成一体','Your knowledge is connecting')}</span></div>
      <canvas ref={canvas} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={up} onPointerLeave={()=>setHovered(null)} aria-label={tx('带环绕粒子的球形知识图谱，可拖动旋转与缩放，下方有等效按钮','Knowledge sphere with orbiting particles. Drag to rotate and zoom; equivalent controls are provided below.')} role="img"/>
      <div className="globe-help"><Move size={13}/>{tx('拖动旋转 · 滚轮 / 双指缩放 · 点击节点','Drag to rotate · Scroll / pinch to zoom · Select a node')}</div>
      <div className="orbit-controls"><button title={tx('向左旋转','Rotate left')} aria-label={tx('向左旋转','Rotate left')} onClick={()=>{view.current.yaw-=.25;paintNow.current?.();}}><ChevronLeft size={18}/></button><button title={tx('向右旋转','Rotate right')} aria-label={tx('向右旋转','Rotate right')} onClick={()=>{view.current.yaw+=.25;paintNow.current?.();}}><ChevronRight size={18}/></button><button aria-label={tx('向上旋转','Rotate up')} onClick={()=>{view.current.pitch=clamp(view.current.pitch-.2,-1.2,1.2);paintNow.current?.();}}><ChevronUp size={18}/></button><button aria-label={tx('向下旋转','Rotate down')} onClick={()=>{view.current.pitch=clamp(view.current.pitch+.2,-1.2,1.2);paintNow.current?.();}}><ChevronDown size={18}/></button><button aria-label={tx('放大知识球','Zoom in')} onClick={()=>setScale(view.current.zoom+.1)}><Plus size={18}/></button><button aria-label={tx('缩小知识球','Zoom out')} onClick={()=>setScale(view.current.zoom-.1)}><Minus size={18}/></button><output>{Math.round(zoom*100)}%</output><button aria-label={rotating?tx('暂停旋转','Pause rotation'):tx('恢复旋转','Resume rotation')} aria-pressed={rotating} onClick={()=>setRotating(!rotating)}>{rotating?<Pause size={16}/>:<Play size={16}/>}</button><button aria-label={tx('重置视角','Reset view')} onClick={()=>{view.current={yaw:.55,pitch:-.2,zoom:1};setZoom(1);paintNow.current?.();}}><RotateCcw size={16}/></button></div>
      <button className="globe-expand-button" aria-label={expanded?tx('退出全屏','Exit fullscreen'):tx('全屏知识星球','Fullscreen knowledge sphere')} onClick={expanded?exitExpanded:enterExpanded}>{expanded?<Minimize2 size={17}/>:<Maximize2 size={17}/>}{expanded?tx('退出全屏','Exit fullscreen'):tx('全屏预览','Fullscreen')}</button>
      {expanded&&<div className="globe-fullscreen-selected"><span>{active.name}</span><button onClick={async()=>{await exitExpanded();onNavigate(active.id);}}>{tx('打开章节','Open chapter')}<ArrowUpRight size={14}/></button></div>}
    </div>
    <div className="globe-inspector" style={{'--topic-color':active.color}}><div className="inspector-eyebrow"><span>{tx('当前知识点','Selected concept')}</span><span className={learned.includes(active.id)?'lit-label':''}>{learned.includes(active.id)?tx('已点亮','Illuminated'):tx('待点亮','To explore')}</span></div><h3>{active.name}</h3><p>{active.summary}</p><div className="globe-selection-actions"><button className="v4-primary" onClick={()=>onNavigate(active.id)}>{tx('进入这个知识点','Open this concept')}<ArrowUpRight size={16}/></button><button className="v4-quiet" onClick={()=>onToggle(active.id)}>{learned.includes(active.id)?<Check size={15}/>:<Sparkles size={15}/>} {learned.includes(active.id)?tx('取消标记','Unmark'):tx('我已理解，点亮','I understand · light up')}</button></div><p className="progress-note">{tx('标记的是学习记录，不是能力测试。','A learning record, not a competency test.')}</p><button className="preview-toggle" aria-pressed={preview} onClick={()=>setPreview(!preview)}><Eye size={14}/>{preview?tx('回到真实进度','Show actual progress'):tx('预览全部点亮','Preview fully illuminated')}</button>
      {!compact&&<div className="node-picker" role="group" aria-label={tx('选择知识点','Choose a concept')}>{topics.map(t=><button key={t.id} className={selected===t.id?'selected':''} title={t.name} aria-label={`${t.name} · ${learned.includes(t.id)?tx('已点亮','illuminated'):tx('未点亮','not illuminated')}`} aria-pressed={selected===t.id} style={{'--node-color':t.color}} onClick={()=>setSelected(t.id)}>{learned.includes(t.id)?<Check size={12}/>:t.num}</button>)}</div>}
    </div>
  </div>;
}
