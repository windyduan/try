import React, { useState, useEffect, useRef, useContext } from 'react';
import { Localize, LanguageContext, translate } from './i18n.jsx';
import { Player } from '@remotion/player';
import { Play, Pause, RotateCcw, ChevronRight, Check, Search, Layers } from 'lucide-react';
import FlowMovie from './FlowMovie.jsx';
import { Range, Segments, Metric, LabLayout, Legend, Plot, Bars, fmt, pct, Formula } from './ui.jsx';
import { forward, W1, B1, W2, B2, activate, samples, mse, regressionStep, rotate, dot, softmax, attention, attentionKeys, attentionValues, imageGrid, kernels, convolution, confusion, classificationSamples, nucleus, routeExperts, kvBytes, loraParams, keywordSearch } from './math.js';
import { workflows, retrievalDocs } from './content.js';

const BLUE = '#0b91ca', ORANGE = '#ef7731', PURPLE = '#dd517d', GREEN = '#1a9b73';

function Neural() {
  const [x, setX] = useState([.7, .4]);
  const [type, setType] = useState('sigmoid');
  const [selected, setSelected] = useState(0);
  const result = forward(x, type);
  const inputPos = [[90, 118], [90, 248]], hiddenPos = [[309, 65], [309, 150], [309, 235], [309, 320]], outputPos = [527, 193];
  const [hx, hy] = hiddenPos[selected];
  const formula = `${fmt(W1[selected][0])} × ${fmt(x[0])} ${W1[selected][1] >= 0 ? '+' : '−'} ${fmt(Math.abs(W1[selected][1]))} × ${fmt(x[1])} ${B1[selected] >= 0 ? '+' : '−'} ${fmt(Math.abs(B1[selected]))}`;
  const nodes = (positions, values, color, labels, clickable = false) => positions.map(([cx,cy],i)=><g key={labels[i]} role={clickable?'button':undefined} tabIndex={clickable?0:undefined} aria-label={clickable?`查看隐藏节点 h${i+1} 的计算`:undefined} aria-pressed={clickable?selected===i:undefined} onClick={clickable?()=>setSelected(i):undefined} onKeyDown={clickable?e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();setSelected(i);}}:undefined} className={clickable?'graph-node interactive':''}><circle cx={cx} cy={cy} r="30" fill="white" stroke={color} strokeWidth={clickable&&selected===i?2.8:1.5}/><circle cx={cx} cy={cy} r="25" fill={color} fillOpacity={.1+Math.min(1,Math.abs(values[i]))*.35}/><text x={cx} y={cy+5} textAnchor="middle" className="svg-value">{fmt(values[i])}</text><text x={cx} y={cy+48} textAnchor="middle" className="svg-label">{labels[i]}</text></g>);
  return <Localize><LabLayout controls={<><Range label="输入 x₁" min={-1} max={1} value={x[0]} onChange={v=>setX([v,x[1]])}/><Range label="输入 x₂" min={-1} max={1} value={x[1]} onChange={v=>setX([x[0],v])}/><Segments label="隐藏层激活" value={type} onChange={setType} options={ [['sigmoid','Sigmoid'],['relu','ReLU'],['linear','线性']] }/><Metric label="输出 ŷ" value={fmt(result.output,3)} note="固定权重的前向计算"/><div className="inspector"><span className="inspector-title">{`节点 h${selected+1} 的计算`}</span><code>{formula}</code><span>加权和 z = {fmt(result.z[selected],3)}</span><span>激活后 h = {fmt(result.h[selected],3)}</span></div></>} footer={<><Legend items={[[BLUE,'正权重'],[ORANGE,'负权重'],[PURPLE,'隐藏节点']]}/><span>点选隐藏节点，查看乘加与激活。</span></>}><svg viewBox="0 0 620 390" className="network-svg" role="img" aria-label={`两个输入、四个隐藏节点和一个输出的神经网络，当前输出 ${fmt(result.output,3)}`}><text x="90" y="31" textAnchor="middle" className="svg-label">输入层</text><text x="309" y="25" textAnchor="middle" className="svg-label">隐藏层</text><text x="527" y="31" textAnchor="middle" className="svg-label">输出层</text>{hiddenPos.map(([cx,cy],j)=>inputPos.map(([ix,iy],i)=>{const path=`M ${ix+30} ${iy} C ${ix+120} ${iy} ${cx-120} ${cy} ${cx-30} ${cy}`;return <g key={`${j}${i}`}><path d={path} fill="none" stroke={W1[j][i]>=0?BLUE:ORANGE} strokeWidth={1+Math.abs(W1[j][i])*1.5} opacity={selected===j?.8:.26}/><path d={path} fill="none" stroke={W1[j][i]>=0?BLUE:ORANGE} strokeWidth="4" className="signal" pathLength="1" style={{animationDelay:`-${i+j*.5}s`}}/></g>;}))}{hiddenPos.map(([cx,cy],j)=><path key={j} d={`M ${cx+30} ${cy} C ${cx+120} ${cy} ${outputPos[0]-120} ${outputPos[1]} ${outputPos[0]-30} ${outputPos[1]}`} fill="none" stroke={W2[j]>=0?BLUE:ORANGE} strokeWidth={1+Math.abs(W2[j])*1.5} opacity=".45"/>)}{nodes(inputPos,x,BLUE,['x₁','x₂'])}{nodes(hiddenPos,result.h,PURPLE,['h₁','h₂','h₃','h₄'],true)}{nodes([outputPos],[result.output],GREEN,['ŷ'])}<text x="90" y="372" textAnchor="middle" className="svg-caption">两个数值特征</text><text x="309" y="382" textAnchor="middle" className="svg-caption">加权和 → 激活</text><text x="527" y="372" textAnchor="middle" className="svg-caption">Sigmoid</text></svg></LabLayout></Localize>;
}

function Vectors() {
  const [angle,setAngle]=useState(20),[stretch,setStretch]=useState(1.25);
  const theta=angle*Math.PI/180;
  const transform=([x,y])=>rotate([x*stretch,y],theta);
  const pos=([x,y])=>[310+x*58,174-y*58];
  const path=(a,b)=>{const p=pos(a),q=pos(b);return `M${p[0]} ${p[1]} L${q[0]} ${q[1]}`;};
  const a=transform([1,0]),b=transform([0,1]),v=transform([1.5,1]);
  return <Localize><LabLayout controls={<><Range label="旋转角度" value={angle} min={-90} max={90} step={1} unit="°" display={angle} onChange={setAngle}/><Range label="横向拉伸" value={stretch} min={.4} max={2} onChange={setStretch}/><div className="matrix-display"><span>变换矩阵 A</span><code>{fmt(a[0])}　{fmt(b[0])}<br/>{fmt(a[1])}　{fmt(b[1])}</code></div><Metric label="点 (1.5, 1) 变换后" value={`(${fmt(v[0])}, ${fmt(v[1])})`} note="拉伸后再旋转"/></>} footer={<Legend items={[[BLUE,'第一基向量'],[ORANGE,'第二基向量'],[PURPLE,'变换后的点']]}/>}><svg viewBox="0 0 620 350" className="plot" role="img" aria-label="线性变换前后的二维坐标网格"><defs><clipPath id="vectorClip"><rect width="620" height="350"/></clipPath><marker id="blue-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 10 5 0 10" fill={BLUE}/></marker><marker id="orange-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0 0 10 5 0 10" fill={ORANGE}/></marker></defs><g clipPath="url(#vectorClip)">{Array.from({length:13},(_,i)=>i-6).map(n=><g key={n}><path d={path([n,-5],[n,5])} stroke="#e5eaf1"/><path d={path([-6,n],[6,n])} stroke="#e5eaf1"/><path d={path(transform([n,-5]),transform([n,5]))} stroke={BLUE} opacity=".23"/><path d={path(transform([-6,n]),transform([6,n]))} stroke={ORANGE} opacity=".23"/></g>)}<path d={path([-6,0],[6,0])} stroke="#a2afbd"/><path d={path([0,-5],[0,5])} stroke="#a2afbd"/><path d={path([0,0],a)} stroke={BLUE} strokeWidth="3" markerEnd="url(#blue-arrow)"/><path d={path([0,0],b)} stroke={ORANGE} strokeWidth="3" markerEnd="url(#orange-arrow)"/><path d={path([0,0],v)} stroke={PURPLE} strokeWidth="2" strokeDasharray="5 5"/><circle cx={pos(v)[0]} cy={pos(v)[1]} r="7" fill={PURPLE}/><text x={pos(a)[0]+8} y={pos(a)[1]+18} className="svg-value" fill={BLUE}>A e₁</text><text x={pos(b)[0]+8} y={pos(b)[1]-8} className="svg-value" fill={ORANGE}>A e₂</text><circle cx="310" cy="174" r="3" fill="#536378"/></g></svg></LabLayout></Localize>;
}

function Calculus() {
  const [x,setX]=useState(.8),[h,setH]=useState(.8);
  const f=v=>.55*v*v;
  const pos=(a,b)=>[322+a*77,296-b*39];
  const point=pos(x,f(x)),second=pos(x+h,f(x+h));
  const tangent=.55*2*x,secant=(f(x+h)-f(x))/h;
  const path=Array.from({length:101},(_,i)=>{const v=-3+i*.06,p=pos(v,f(v));return `${i?'L':'M'} ${p[0]} ${p[1]}`;}).join(' ');
  return <Localize><LabLayout controls={<><Range label="位置 x" value={x} min={-2} max={2} onChange={setX}/><Range label="两点间隔 h" value={h} min={.02} max={1} onChange={setH}/><Metric label="切线斜率 f′(x)" value={fmt(tangent,3)}/><Metric label="割线斜率" value={fmt(secant,3)} tone="orange" note="让 h 变小，观察两者接近"/></>} footer={<><Legend items={[[BLUE,'函数曲线'],[ORANGE,'切线'],[PURPLE,'割线']]}/><span>f(x) = 0.55x²</span></>}><Plot title="二次函数的切线与割线"><g clipPath="url(#plot-clip)"><path d={path} fill="none" stroke={BLUE} strokeWidth="3"/>{[[tangent,ORANGE],[secant,PURPLE]].map(([s,c])=>{const p=pos(-3,f(x)+s*(-3-x)),q=pos(3,f(x)+s*(3-x));return <line key={c} x1={p[0]} y1={p[1]} x2={q[0]} y2={q[1]} stroke={c} strokeWidth="2" strokeDasharray={c===PURPLE?'5 5':undefined}/>;})}<circle cx={point[0]} cy={point[1]} r="7" fill={BLUE} stroke="white" strokeWidth="3"/><circle cx={second[0]} cy={second[1]} r="6" fill={PURPLE}/></g><text x={point[0]+12} y={point[1]-13} className="svg-value">x = {fmt(x)}</text></Plot></LabLayout></Localize>;
}

function Probability() {
  const [mean,setMean]=useState(0),[std,setStd]=useState(1);
  const pos=(x,y)=>[322+x*51,306-y*300];
  const pdf=x=>Math.exp(-(((x-mean)/std)**2)/2)/(std*Math.sqrt(2*Math.PI));
  const path=Array.from({length:201},(_,i)=>{const x=-5.4+i*.054,p=pos(x,pdf(x));return `${i?'L':'M'} ${p[0]} ${p[1]}`;}).join(' ');
  const a=pos(mean-std,pdf(mean-std)),b=pos(mean+std,pdf(mean+std));
  return <Localize><LabLayout controls={<><Range label="均值 μ" value={mean} min={-2} max={2} onChange={setMean}/><Range label="标准差 σ" value={std} min={.5} max={1.8} onChange={setStd}/><Metric label="μ ± σ 的区间概率" value="约 68.27%" note={`区间 [${fmt(mean-std)}, ${fmt(mean+std)}]`}/><Metric label="峰值密度" value={fmt(pdf(mean),3)} tone="purple"/></>} footer={<span>阴影覆盖 μ − σ 到 μ + σ；概率是曲线下的面积。</span>}><Plot title="正态分布与一个标准差范围" yLabel="密度"><path d={`${path} L596 306 L48 306 Z`} fill="url(#area-blue)"/><path d={path} fill="none" stroke={BLUE} strokeWidth="3"/>{Array.from({length:100},(_,i)=>{const x=mean-std+i*std*2/99,p=pos(x,pdf(x));return <line key={i} x1={p[0]} x2={p[0]} y1={p[1]} y2="306" stroke={BLUE} opacity=".3" strokeWidth="2"/>;})}<line x1={pos(mean,0)[0]} x2={pos(mean,0)[0]} y1={pos(mean,pdf(mean))[1]} y2="306" stroke={PURPLE} strokeDasharray="5 5"/><text x={pos(mean,pdf(mean))[0]} y={pos(mean,pdf(mean))[1]-15} textAnchor="middle" className="svg-value">μ = {fmt(mean)}</text><text x={a[0]} y="327" className="svg-label" textAnchor="middle">μ − σ</text><text x={b[0]} y="327" className="svg-label" textAnchor="middle">μ + σ</text></Plot></LabLayout></Localize>;
}

function Regression() {
  const [model,setModel]=useState({w:.6,b:.8}),[training,setTraining]=useState(false),[steps,setSteps]=useState(0);
  useEffect(()=>{if(!training)return;const timer=setInterval(()=>{setModel(m=>regressionStep(samples,m.w,m.b));setSteps(s=>s+1);},100);return()=>clearInterval(timer);},[training]);
  useEffect(()=>{if(steps>=150)setTraining(false);},[steps]);
  const pos=(x,y)=>[58+x*133,306-y*40];
  const a=pos(0,model.b),b=pos(4,model.w*4+model.b);
  return <Localize><LabLayout controls={<><Range label="斜率 w" min={-1} max={2.5} value={model.w} onChange={w=>{setTraining(false);setModel({...model,w});}}/><Range label="截距 b" min={-1} max={2.5} value={model.b} onChange={b=>{setTraining(false);setModel({...model,b});}}/><Metric label="均方误差 MSE" value={fmt(mse(samples,model.w,model.b),4)}/><button className="primary-button" onClick={()=>{if(steps>=150)setSteps(0);setTraining(!training);}}>{training?<Pause size={16}/>:<Play size={16}/>} {training?'暂停训练':'运行梯度下降'}</button><span className="control-note">{`已更新 ${steps} 步 · 学习率 0.035`}</span></>} footer={<><Legend items={[[BLUE,'样本'],[ORANGE,'预测直线'],[PURPLE,'残差']]}/><span>10 个固定教学样本</span></>}><Plot title="线性回归的样本、预测直线和残差"><g clipPath="url(#plot-clip)">{samples.map(([x,y],i)=>{const p=pos(x,y),q=pos(x,model.w*x+model.b);return <g key={i}><line x1={p[0]} x2={q[0]} y1={p[1]} y2={q[1]} stroke={PURPLE} strokeDasharray="4 4"/><circle cx={p[0]} cy={p[1]} r="5.5" fill={BLUE} stroke="white" strokeWidth="2"/></g>;})}<line x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={ORANGE} strokeWidth="3"/></g><text x="65" y="50" className="svg-value">ŷ = {fmt(model.w)}x + {fmt(model.b)}</text></Plot></LabLayout></Localize>;
}

function AutoDiff() {
  const [x,setX]=useState(.8),[back,setBack]=useState(true);
  const z=2*x+1,y=z*z;
  const values=[x,z,y],labels=['输入 x','z = 2x + 1','y = z²'];
  return <Localize><LabLayout controls={<><Range label="输入 x" value={x} min={-2} max={2} onChange={setX}/><Segments label="观察方向" value={back?'back':'forward'} options={ [['forward','前向'],['back','反向']] } onChange={v=>setBack(v==='back')}/><Metric label="最终导数 dy / dx" value={fmt(4*z,3)} note="局部导数 2z × 2"/><Metric label="函数值 y" value={fmt(y,3)} tone="purple"/></>} footer={<span>链式法则把两个局部导数相乘；反向求导不改变前向值。</span>}><svg viewBox="0 0 620 340" className="plot" role="img" aria-label="函数 y 等于 2x 加 1 的平方的计算图">{labels.map((label,i)=><g key={label}><rect x={35+i*202} y="119" width="147" height="100" rx="15" fill="white" stroke={i===0?BLUE:i===1?PURPLE:GREEN} strokeWidth="1.5"/><text x={108+i*202} y="149" textAnchor="middle" className="svg-label">{label}</text><text x={108+i*202} y="186" textAnchor="middle" className="svg-big">{fmt(values[i])}</text>{i<2&&<path d={`M${183+i*202} 169 H${235+i*202}`} stroke="#abb8c9" strokeWidth="2"/>}{back&&i<2&&<><path d={`M${237+i*202} 265 H${184+i*202}`} stroke={ORANGE} strokeWidth="2" strokeDasharray="5 5"/><text x={207+i*202} y="288" textAnchor="middle" className="svg-label">{i===0?'dz/dx = 2':`dy/dz = ${fmt(2*z)}`}</text></>}</g>)}<text x="310" y="55" textAnchor="middle" className="svg-label">{back?'从 y 到 x，组合局部导数':'从 x 到 y，计算中间值'}</text></svg></LabLayout></Localize>;
}

function Classification() {
  const [threshold,setThreshold]=useState(.5);
  const c=confusion(classificationSamples,threshold);
  return <Localize><LabLayout controls={<><Range label="判为正类的阈值" value={threshold} min={0} max={1} onChange={setThreshold}/><Metric label="精确率 Precision" value={pct(c.precision)}/><Metric label="召回率 Recall" value={pct(c.recall)} tone="orange"/><span className="control-note">规则：分数 ≥ 阈值即判为正类</span></>} footer={<Legend items={[[BLUE,'真实正类'],[ORANGE,'真实负类']]}/>}><div className="classification-visual"><div className="score-strip">{classificationSamples.map(({p,y},i)=><div className="score-dot" key={i} style={{left:`${p*100}%`,top:y?28:65,background:y?BLUE:ORANGE}} title={`分数 ${p}，真实类别 ${y}`}>{y}</div>)}<div className="threshold-line" style={{left:`${threshold*100}%`}}/><span className="axis-start">0</span><span className="axis-end">1</span></div><div className="confusion-grid"><div><span>正确找出的正类 TP</span><strong>{c.tp}</strong></div><div className="negative"><span>误报 FP</span><strong>{c.fp}</strong></div><div className="negative"><span>漏报 FN</span><strong>{c.fn}</strong></div><div><span>正确排除的负类 TN</span><strong>{c.tn}</strong></div></div></div></LabLayout></Localize>;
}

function Optimization() {
  const [eta,setEta]=useState(.15),[beta,setBeta]=useState(0),[running,setRunning]=useState(false),[history,setHistory]=useState([2.5]);
  const v=useRef(0);
  const advance=()=>setHistory(h=>{if(h.length>=35||Math.abs(h.at(-1))>3.2){setRunning(false);return h;}v.current=beta*v.current+2*h.at(-1);return [...h,h.at(-1)-eta*v.current];});
  useEffect(()=>{if(!running)return;const timer=setInterval(advance,400);return()=>clearInterval(timer);},[running,eta,beta]);
  const reset=()=>{setRunning(false);v.current=0;setHistory([2.5]);};
  const w=history.at(-1),pos=(x,y)=>[322+x*67,306-y*29];
  const path=Array.from({length:101},(_,i)=>{const x=-3.2+i*.064,p=pos(x,x*x);return `${i?'L':'M'}${p[0]} ${p[1]}`;}).join(' ');
  return <Localize><LabLayout controls={<><Range label="学习率 η" value={eta} min={.02} max={1.25} onChange={e=>{setEta(e);reset();}}/><Range label="动量 β" value={beta} min={0} max={.95} onChange={b=>{setBeta(b);reset();}}/><Metric label="当前损失 w²" value={fmt(w*w,4)} note={`w = ${fmt(w,4)} · 第 ${history.length-1} 步`}/><div className="button-pair"><button className="primary-button" onClick={()=>setRunning(!running)} disabled={history.length>=35||Math.abs(w)>3.2}>{running?<Pause size={15}/>:<Play size={15}/>} {running?'暂停':'运行'}</button><button className="secondary-button" onClick={advance} disabled={running||history.length>=35||Math.abs(w)>3.2}>走一步</button></div><button className="text-button" onClick={reset}><RotateCcw size={14}/> 回到起点</button>{Math.abs(w)>3.2&&<p className="control-note">参数已离开图示范围，运行停止。减小学习率再比较。</p>}</>} footer={<><Legend items={[[BLUE,'损失曲线'],[ORANGE,'参数走过的位置']]}/><span>L(w) = w²</span></>}><Plot title="梯度下降沿二次损失函数移动" yLabel="损失" xLabel="w"><g clipPath="url(#plot-clip)"><path d={path} fill="none" stroke={BLUE} strokeWidth="3"/>{history.slice(1).map((value,i)=>{const a=pos(history[i],history[i]**2),b=pos(value,value**2);return <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} stroke={ORANGE} opacity=".45" strokeWidth="1.5"/>;})}{history.map((value,i)=>{const p=pos(value,value*value);return <circle key={i} cx={p[0]} cy={p[1]} r={i===history.length-1?7:3} fill={ORANGE} opacity={i===history.length-1?1:.4}/>;})}</g></Plot></LabLayout></Localize>;
}

function Convolution() {
  const [kernel,setKernel]=useState('edge'),[cell,setCell]=useState([1,1]);
  const k=kernels[kernel],out=convolution(imageGrid,k),[cy,cx]=cell;
  const terms=k.flatMap((row,j)=>row.map((value,i)=>`${fmt(value, kernel==='smooth'?2:0)}×${imageGrid[cy+j][cx+i]}`));
  return <Localize><LabLayout className="convolution-lab" controls={<><Segments label="选择卷积核" value={kernel} onChange={setKernel} options={ [['edge','边缘'],['smooth','平滑'],['sharpen','锐化']] }/><div className="kernel-grid">{k.flat().map((v,i)=><span key={i}>{fmt(v,kernel==='smooth'?2:0)}</span>)}</div><Metric label={`输出 [${cy}, ${cx}]`} value={fmt(out[cy][cx],3)}/><span className="control-note">步幅 1 · 无填充 · 不翻转核</span></>} footer={<div className="sum-expression"><span>当前窗口的逐项乘加</span><code>{terms.join(' + ')} = {fmt(out[cy][cx],3)}</code></div>}><div className="conv-matrices"><div><span className="diagram-label">输入 6 × 6</span><div className="pixel-grid input-pixels">{imageGrid.flatMap((row,y)=>row.map((v,x)=><span key={`${y}${x}`} className={y>=cy&&y<cy+3&&x>=cx&&x<cx+3?'in-window':''} style={{background:v?'#b2c8e6':'#f0f4f9'}}>{v}</span>))}<div className="window-outline" style={{left:`${cx/6*100}%`,top:`${cy/6*100}%`}}/></div></div><span className="conv-sign">∗</span><div><span className="diagram-label">输出 4 × 4 · 点击选择</span><div className="pixel-grid output-pixels">{out.flatMap((row,y)=>row.map((v,x)=><button key={`${y}${x}`} onClick={()=>setCell([y,x])} aria-label={`选择输出第 ${y} 行第 ${x} 列，值 ${fmt(v)}`} aria-pressed={cy===y&&cx===x} className={cy===y&&cx===x?'active':''} style={{background:v>=0?`rgba(100,137,188,${.08+Math.min(Math.abs(v)/5,.7)})`:`rgba(206,153,112,${.08+Math.min(Math.abs(v)/5,.7)})`}}>{fmt(v,kernel==='smooth'?2:0)}</button>))}</div></div></div></LabLayout></Localize>;
}

function Residual() {
  const [x,setX]=useState(.8),[weight,setWeight]=useState(.35),[skip,setSkip]=useState(true);
  const f=weight*Math.tanh(x),dy=weight*(1-Math.tanh(x)**2)+(skip?1:0),y=f+(skip?x:0);
  return <Localize><LabLayout controls={<><Range label="输入 x" value={x} min={-2} max={2} onChange={setX}/><Range label="分支权重 w" value={weight} min={-.8} max={.8} onChange={setWeight}/><Segments label="跳跃连接" value={skip?'on':'off'} onChange={v=>setSkip(v==='on')} options={ [['on','开启'],['off','关闭']] }/><Metric label="输出 y" value={fmt(y,3)}/><Metric label="导数 dy / dx" value={fmt(dy,3)} tone="purple"/></>} footer={<span>简化分支 F(x) = w · tanh(x)。有跳跃连接时加回原输入。</span>}><svg viewBox="0 0 620 330" className="plot" role="img" aria-label="残差块的主分支与跳跃连接"><path d="M90 178 H225 M375 178 H480" stroke={BLUE} strokeWidth="2"/><rect x="225" y="133" width="150" height="90" rx="15" fill="#f6e8ed" stroke={PURPLE}/><text x="300" y="170" textAnchor="middle" className="svg-value">F(x)</text><text x="300" y="198" textAnchor="middle" className="svg-label">{fmt(f,3)}</text><circle cx="90" cy="178" r="26" fill="white" stroke={BLUE}/><text x="90" y="184" textAnchor="middle" className="svg-value">{fmt(x)}</text><circle cx="497" cy="178" r="25" fill="white" stroke={GREEN}/><text x="497" y="185" textAnchor="middle" className="svg-big">+</text><path d="M523 178 H590" stroke={GREEN} strokeWidth="2"/><text x="555" y="154" textAnchor="middle" className="svg-value">{fmt(y,3)}</text><path d="M90 151 V70 Q90 55 105 55 H482 Q497 55 497 70 V151" fill="none" stroke={ORANGE} strokeWidth="2.5" opacity={skip?1:.15} strokeDasharray={skip?undefined:'5 5'}/><text x="300" y="42" textAnchor="middle" className="svg-label">{skip?'直接保留输入 x':'跳跃连接已关闭'}</text></svg></LabLayout></Localize>;
}

function Sampling() {
  const [temperature,setTemperature]=useState(.9),[topP,setTopP]=useState(.9),[chosen,setChosen]=useState(null);
  const labels=['学习','理解','探索','练习','观察'],base=softmax([2.2,1.7,1.2,.6,.1],temperature),weights=nucleus(base,topP);
  const sample=()=>{let n=Math.random();let total=0;for(let i=0;i<weights.length;i++){total+=weights[i];if(n<=total){setChosen(i);return;}}setChosen(weights.findLastIndex(v=>v>0));};
  return <Localize><LabLayout controls={<><Range label="温度 T" value={temperature} min={.15} max={2} onChange={t=>{setTemperature(t);setChosen(null);}}/><Range label="Top-p" value={topP} min={.1} max={1} onChange={p=>{setTopP(p);setChosen(null);}}/><button className="primary-button" onClick={sample}><Play size={15}/> 采样一次</button><Metric label="本次选中" value={chosen==null?'等待采样':labels[chosen]} note="按下方概率随机抽取"/></>} footer={<span>人工 logits：[2.2, 1.7, 1.2, 0.6, 0.1]。保留的候选重新归一化。</span>}><div className="sampling-visual"><div className="sentence-prompt">让我们一起 <span>{chosen==null?'…':labels[chosen]}</span></div><Bars labels={labels} values={weights} active={chosen}/><span className="diagram-label">截断并归一化后的候选概率</span></div></LabLayout></Localize>;
}

function Sequence() {
  const [step,setStep]=useState(0),[memory,setMemory]=useState(.7);
  const tokens=[.6,-.2,.9,.3,-.5];
  const states=[0];tokens.forEach(x=>states.push(Math.tanh(.8*x+memory*states.at(-1))));
  return <Localize><LabLayout controls={<><Range label="循环权重 Wₕ" value={memory} min={-.9} max={.9} onChange={setMemory}/><Metric label={`隐藏状态 h${step}`} value={fmt(states[step],3)} note="输入权重 0.8 · 偏置 0"/><button className="primary-button" onClick={()=>setStep(s=>Math.min(5,s+1))} disabled={step===5}><ChevronRight size={16}/> 读入下一个</button><button className="text-button" onClick={()=>setStep(0)}><RotateCcw size={14}/> 从头读取</button></>} footer={<span>同一组权重在五个时间步共享。点选时间步也可查看状态。</span>}><div className="sequence-visual"><div className="sequence-track">{tokens.map((x,i)=><button key={i} className={step===i+1?'active':i+1<step?'past':''} onClick={()=>setStep(i+1)}><small>t = {i+1}</small><span>x = {fmt(x,1)}</span><div>tanh</div><strong>h = {fmt(states[i+1],3)}</strong></button>)}</div><div className="state-strip"><span>h₀ = 0</span><span>h{step} = {fmt(states[step],3)}</span></div></div></LabLayout></Localize>;
}

function Translation() {
  const [selected,setSelected]=useState(2);
  const from=['我','正在','学习','深度学习'],to=['I','am','learning','deep learning'];
  const weights=[[.78,.08,.08,.06],[.12,.62,.2,.06],[.06,.15,.7,.09],[.06,.05,.14,.75]];
  return <Localize><LabLayout controls={<><span className="control-label">选择生成位置</span>{to.map((t,i)=><button key={t} className={`token-select ${i===selected?'selected':''}`} onClick={()=>setSelected(i)}>{t}</button>)}<Metric label="主要读取输入" value={<span data-preserve-language="zh" lang="zh-CN">{from[weights[selected].indexOf(Math.max(...weights[selected]))]}</span>}/><span className="control-note">人工对齐示例 · 非模型输出</span></>} footer={<span>每个目标位置有一组不同的权重，每组权重之和为 1。</span>}><div className="translation-visual"><div className="diagram-label">输入：中文 · 输出：英文</div><div className="tokens">{from.map((t,i)=><span data-preserve-language="zh" lang="zh-CN" key={t} style={{background:`rgba(100,137,188,${.1+weights[selected][i]*.55})`}}>{t}</span>)}</div><div className="translation-label">生成 “{to[selected]}” 时的读取比例</div><Bars preserveLabels labels={from} values={weights[selected]}/></div></LabLayout></Localize>;
}

function Attention() {
  const [index,setIndex]=useState(2),[causal,setCausal]=useState(false);
  const query=attentionKeys[index],r=attention(query,causal,index);
  const labels=['我','正在','学习','数学'];
  return <Localize><LabLayout controls={<><Segments label="查询 token" value={index} onChange={setIndex} options={labels.map((l,i)=>[i,l])}/><Segments label="因果遮罩" value={causal?'on':'off'} onChange={v=>setCausal(v==='on')} options={ [['off','关闭'],['on','开启']] }/><div className="matrix-display"><span>当前 Query</span><code>[{query.map(v=>fmt(v,1)).join(', ')}]</code></div><Metric label="输出向量" value={`[${r.output.map(v=>fmt(v,3)).join(', ')}]`} note="按权重组合二维 Value"/></>} footer={<span>二维人工向量 · Q = K · dₖ = 2 · 权重为真实 Softmax 计算。</span>}><div className="attention-visual"><div className="tokens">{labels.map((l,i)=><button key={l} className={index===i?'selected':''} aria-pressed={index===i} onClick={()=>setIndex(i)}>{l}<small>{causal&&i>index?'已遮罩':`分数 ${fmt(r.scores[i],3)}`}</small></button>)}</div><div className="attention-lines"><span>Query「{labels[index]}」</span><span>点积 → 缩放 → Softmax</span></div><Bars labels={labels} values={r.weights}/><div className="value-strip">{attentionValues.map((v,i)=><span key={i}>V{i+1} = [{v.join(', ')}]</span>)}</div></div></LabLayout></Localize>;
}

function Mask() {
  const [mode,setMode]=useState('gpt'),[selected,setSelected]=useState(2);
  const tokens=['我','喜欢','学习','数学','。'];
  return <Localize><LabLayout controls={<><Segments label="注意力可见性" value={mode} onChange={setMode} options={ [['gpt','GPT 因果'],['bert','BERT 双向']] }/><Range label="查询位置" value={selected} min={0} max={4} step={1} display={selected+1} onChange={setSelected}/><Metric label="当前可读位置数" value={mode==='gpt'?selected+1:5} note={`查询 token：「${tokens[selected]}」`}/></>} footer={<Legend items={[[BLUE,'可读取'],['#e7ecf3','被遮罩']]}/>}><div className="mask-visual"><div className="mask-table"><span/>{tokens.map((t,i)=><span key={`header${i}`}>{t}</span>)}{tokens.map((t,i)=><React.Fragment key={i}><button className={selected===i?'selected':''} onClick={()=>setSelected(i)}>{t}</button>{tokens.map((_,j)=><button key={j} className={`${mode==='bert'||j<=i?'visible':'blocked'} ${i===selected?'row-selected':''}`} onClick={()=>setSelected(i)} aria-label={`查询位置 ${i+1} 读取位置 ${j+1}：${mode==='bert'||j<=i?'可读':'遮罩'}`}>{mode==='bert'||j<=i?'1':'0'}</button>)}</React.Fragment>)}</div><div className="diagram-label">行：查询位置 · 列：读取位置</div></div></LabLayout></Localize>;
}

function Rope() {
  const [m,setM]=useState(2),[n,setN]=useState(5);
  const q=rotate([1,.2],m*.3),k=rotate([.6,.9],n*.3);
  const pos=([x,y])=>[310+x*118,172-y*118];
  return <Localize><LabLayout controls={<><Range label="Query 位置 m" value={m} min={0} max={12} step={1} display={m} onChange={setM}/><Range label="Key 位置 n" value={n} min={0} max={12} step={1} display={n} onChange={setN}/><Metric label="相对位置 n − m" value={n-m}/><Metric label="旋转后的点积" value={fmt(dot(q,k),4)} tone="purple"/><button className="secondary-button" disabled={m>=12||n>=12} onClick={()=>{setM(m+1);setN(n+1);}}>两者一起平移 +1</button></>} footer={<span>单个二维分量对，频率 θ = 0.3 弧度 / 位置。原向量 q=[1, 0.2]、k=[0.6, 0.9]。</span>}><svg viewBox="0 0 620 340" className="plot" role="img" aria-label="两个位置编码旋转后的向量"><circle cx="310" cy="172" r="121" fill="none" stroke="#dbe4ef" strokeDasharray="4 5"/><line x1="120" y1="172" x2="500" y2="172" stroke="#dbe4ef"/><line x1="310" y1="17" x2="310" y2="326" stroke="#dbe4ef"/>{[[q,BLUE,'Q'],[k,ORANGE,'K']].map(([v,c,l])=><g key={l}><line x1="310" y1="172" x2={pos(v)[0]} y2={pos(v)[1]} stroke={c} strokeWidth="3"/><circle cx={pos(v)[0]} cy={pos(v)[1]} r="6" fill={c}/><text x={pos(v)[0]+9} y={pos(v)[1]-9} className="svg-value" fill={c}>{l}</text></g>)}<circle cx="310" cy="172" r="4" fill="#68798f"/></svg></LabLayout></Localize>;
}

function MoE() {
  const [first,setFirst]=useState(1.4),[k,setK]=useState(2);
  const logits=[first,1,.6,-.2],r=routeExperts(logits,k),values=[.4,.9,-.2,.7];
  const y=dot(r.activeWeights,values);
  return <Localize><LabLayout controls={<><Range label="专家 E₁ 的路由得分" value={first} min={-1} max={3} onChange={setFirst}/><Segments label="激活专家数 Top-k" value={k} options={ [[1,'1'],[2,'2'],[3,'3']] } onChange={setK}/><Metric label="加权输出" value={fmt(y,3)} note="仅组合被选择的专家"/><span className="control-note">其他 logits：[1.0, 0.6, −0.2]</span></>} footer={<span>教学专家输出固定为 [0.4, 0.9, −0.2, 0.7]。仅演示路由与组合。</span>}><div className="moe-visual"><span className="router-label">输入 token → 路由器</span><div className="expert-grid">{r.weights.map((v,i)=><div key={i} className={r.selected.includes(i)?'active':''}><span>专家 E{i+1}</span><strong>{pct(v)}</strong><small>{r.selected.includes(i)?`组合权重 ${pct(r.activeWeights[i])}`:'本次未激活'}</small><code>输出 {values[i]}</code></div>)}</div><div className="moe-output">选中专家 → 重新归一化 → 加权求和</div></div></LabLayout></Localize>;
}

function Retrieval({ Link }) {
  const language=useContext(LanguageContext);
  const [query,setQuery]=useState(()=>translate('卷积为什么能检测边缘？',language));
  useEffect(()=>{setQuery(value=>{
    const original=['卷积为什么能检测边缘？','学习率太大会怎样？','KV Cache 占多少内存？'].find(q=>q===value||translate(q,'en')===value);
    return original?translate(original,language):value;
  });},[language]);
  const results=keywordSearch(query,retrievalDocs);
  return <Localize><><div className="retrieval-input"><Search size={18}/><input aria-label="搜索小型资料库" placeholder="输入问题或关键词" value={query} onChange={e=>setQuery(e.target.value)}/></div><div className="query-examples">{['卷积为什么能检测边缘？','学习率太大会怎样？','KV Cache 占多少内存？'].map(q=><button key={q} onClick={()=>setQuery(translate(q,language))}>{q}</button>)}</div><div className="retrieval-results">{results.length?results.map((d,i)=><article key={d.id}><span className="result-order">0{i+1}</span><div><h4>{d.title}</h4><p>{d.text}</p><Link id={d.id}>查看交互笔记</Link></div><span className="score-badge">匹配 {d.score} 个词项</span></article>):<div className="empty-state"><Search size={25}/><strong>没有命中资料</strong><p>这组资料仅包含六个主题。试试“卷积”“梯度”“注意力”或“缓存”。</p></div>}</div><div className="lab-footer">本地关键词匹配 · 6 条人工整理的资料 · 未接入生成模型</div></></Localize>;
}

function Workflow({ motion }) {
  const language=useContext(LanguageContext);
  const [step,setStep]=useState(0),[selected,setSelected]=useState(0),[showMovie,setShowMovie]=useState(false);
  const player=useRef(null);
  useEffect(()=>{if(!motion)player.current?.pause();},[motion]);
  const current=workflows[selected];
  return <Localize><><div className="workflow-tools"><span>问题：卷积核为什么可以检测边缘？</span><button className="secondary-button" onClick={()=>setShowMovie(!showMovie)}><Play size={14}/>{showMovie?'收起动画':'播放数据流'}</button></div>{showMovie&&<div className="movie-wrap"><Player ref={player} component={FlowMovie} inputProps={{language}} durationInFrames={450} compositionWidth={800} compositionHeight={330} fps={30} controls autoPlay={motion} style={{width:'100%'}}/></div>}<div className="workflow-track">{workflows.map((n,i)=><button key={n.label} onClick={()=>setSelected(i)} className={`${i===selected?'selected':''} ${i<=step?'visited':''}`} aria-pressed={selected===i}><span className="workflow-number">{i<step?<Check size={16}/>:String(i+1).padStart(2,'0')}</span><small>{n.type}</small><strong>{n.label}</strong></button>)}</div><div className="workflow-detail"><div className="workflow-detail-head"><h4>{current.label}</h4><span>节点 {selected+1} / 5</span></div><p>{current.detail}</p><div className="io-grid"><div><span>输入</span><code>{current.input}</code></div><div><span>输出</span><code>{current.output}</code></div></div><details><summary>执行条件与内部细节</summary><p>{current.condition}</p></details></div><div className="workflow-actions"><button className="primary-button" disabled={step===4} onClick={()=>{setStep(step+1);setSelected(step+1);}}><ChevronRight size={16}/> 推进到下一步</button><button className="text-button" onClick={()=>{setStep(0);setSelected(0);}}><RotateCcw size={15}/> 重新开始</button><span>{step===4?'满足停止条件，示例结束。':'当前执行至第 '+(step+1)+' 步'}</span></div><div className="lab-footer">脚本流程模拟 · 点选任意节点查看输入与输出 · 数据流动画使用 Remotion</div></></Localize>;
}

function Cache() {
  const [sequence,setSequence]=useState(4096),[heads,setHeads]=useState(8),[batch,setBatch]=useState(1),[bytes,setBytes]=useState(2);
  const memory=kvBytes({sequence,kvHeads:heads,batch,bytes})/1024**3;
  return <Localize><LabLayout controls={<><Range label="序列长度 S" value={sequence} min={512} max={32768} step={512} display={sequence.toLocaleString()} onChange={setSequence}/><Segments label="KV 头数 Hₖᵥ" value={heads} onChange={setHeads} options={ [[1,'1'],[8,'8'],[32,'32']] }/><Range label="批量大小 B" value={batch} min={1} max={8} step={1} display={batch} onChange={setBatch}/><Segments label="每元素字节 b" value={bytes} onChange={setBytes} options={ [[1,'1 B'],[2,'2 B'],[4,'4 B']] }/></>} footer={<span>固定 32 层、每头维度 128；只估计 KV 张量的理想存储。</span>}><div className="cache-visual"><span className="diagram-label">KV Cache 内存估计</span><strong>{fmt(memory,2)}<small>GiB</small></strong><div className="cache-stack">{Array.from({length:8},(_,i)=><div key={i} style={{width:`${35+sequence/32768*55}%`}}><span>K</span><i/><span>V</span><i/></div>)}</div><span className="diagram-label">示意 8 组，实际共 32 层 · 每层缓存随序列增长</span></div></LabLayout></Localize>;
}

function LowRank() {
  const [dimension,setDimension]=useState(4096),[rank,setRank]=useState(16);
  const p=loraParams(dimension,dimension,rank);
  return <Localize><LabLayout controls={<><Segments label="方形权重矩阵维度 d" value={dimension} onChange={setDimension} options={ [[1024,'1024'],[4096,'4096'],[8192,'8192']] }/><Range label="秩 r" value={rank} min={1} max={128} step={1} display={rank} onChange={setRank}/><Metric label="完整矩阵参数" value={p.full.toLocaleString()} note="d × d"/><Metric label="LoRA 新增参数" value={p.adapter.toLocaleString()} tone="purple" note={`为原矩阵的 ${pct(p.adapter/p.full)}`}/></>} footer={<span>忽略偏置，仅比较一个线性层的权重参数。</span>}><div className="rank-visual"><div className="rank-base"><span>W</span><small>{dimension} × {dimension}</small><em>冻结</em></div><b>+</b><div className="rank-b"><span>B</span><small>{dimension} × {rank}</small></div><b>×</b><div className="rank-a"><span>A</span><small>{rank} × {dimension}</small></div><div className="rank-caption">训练两个小矩阵，组合成一个低秩更新。</div></div></LabLayout></Localize>;
}

function Reward() {
  const [rewardA,setRewardA]=useState(1),[rewardB,setRewardB]=useState(0),[logit,setLogit]=useState(0),[count,setCount]=useState(0);
  const p=softmax([logit,0]);
  const update=()=>{setLogit(z=>z+.8*p[0]*p[1]*(rewardA-rewardB));setCount(c=>c+1);};
  return <Localize><LabLayout controls={<><Range label="动作 A 的奖励" value={rewardA} min={-1} max={1} step={.1} onChange={setRewardA}/><Range label="动作 B 的奖励" value={rewardB} min={-1} max={1} step={.1} onChange={setRewardB}/><button className="primary-button" onClick={update}><Play size={15}/> 更新策略一步</button><button className="text-button" onClick={()=>{setLogit(0);setCount(0);}}><RotateCcw size={14}/> 重置概率</button><Metric label="期望奖励" value={fmt(p[0]*rewardA+p[1]*rewardB,3)} note={`已更新 ${count} 步 · 步长 0.8`}/></>} footer={<span>两动作解析策略梯度示例，非 GRPO：logitₐ += 0.8 · pₐ · pᵦ · (Rₐ − Rᵦ)。</span>}><div className="reward-visual"><span className="diagram-label">策略对两个候选动作的概率</span><Bars labels={['动作 A','动作 B']} values={p}/><div className="reward-cards"><div><span>动作 A</span><strong>奖励 {fmt(rewardA,1)}</strong></div><div><span>动作 B</span><strong>奖励 {fmt(rewardB,1)}</strong></div></div><p className="control-note">奖励相等时，梯度为零；奖励较高的动作概率逐步增加。</p></div></LabLayout></Localize>;
}

const trials=[{task:'检索',name:'定位卷积章节',runs:[1,1,1],ms:[350,410,380]},{task:'检索',name:'问题未收录时返回空结果',runs:[1,0,1],ms:[270,260,310]},{task:'工具',name:'调用参数符合定义',runs:[1,1,1],ms:[180,190,210]},{task:'工具',name:'工具报错后停止错误操作',runs:[1,0,0],ms:[420,480,510]},{task:'回答',name:'来源支持核心结论',runs:[1,1,0],ms:[520,580,610]},{task:'回答',name:'缺少证据时说明限制',runs:[0,1,1],ms:[490,570,540]}];
function Evals() {
  const [filter,setFilter]=useState('全部');
  const data=trials.filter(d=>filter==='全部'||d.task===filter),passed=data.reduce((s,d)=>s+d.runs.reduce((a,b)=>a+b,0),0),all=data.filter(d=>d.runs.every(Boolean)).length;
  return <Localize><><div className="eval-controls"><Segments label="任务类别" value={filter} onChange={setFilter} options={['全部','检索','工具','回答'].map(x=>[x,x])}/><div className="eval-metrics"><Metric label="单次试验成功率" value={pct(passed/(data.length*3))} note={`${passed} / ${data.length*3} 次`}/><Metric label="3 次全部成功的任务" value={pct(all/data.length)} tone="purple" note={`${all} / ${data.length} 个任务`}/></div></div><div className="eval-table-wrap"><table className="eval-table"><caption className="sr-only">固定教学试验，每个任务重复三次</caption><thead><tr><th>检查任务</th><th>第 1 次</th><th>第 2 次</th><th>第 3 次</th><th>平均延迟</th></tr></thead><tbody>{data.map(d=><tr key={d.name}><td><small>{d.task}</small>{d.name}</td>{d.runs.map((v,i)=><td key={i}><span className={v?'trial-pass':'trial-fail'}>{v?'通过':'失败'}</span></td>)}<td>{Math.round(d.ms.reduce((a,b)=>a+b,0)/3)} ms</td></tr>)}</tbody></table></div><div className="lab-footer">6 个固定教学任务 × 3 次试验 · 此处为示例记录，不是实时模型评测。</div></></Localize>;
}

const components={neural:Neural,vectors:Vectors,calculus:Calculus,probability:Probability,regression:Regression,autodiff:AutoDiff,classification:Classification,optimization:Optimization,convolution:Convolution,residual:Residual,sampling:Sampling,sequence:Sequence,translation:Translation,attention:Attention,mask:Mask,rope:Rope,moe:MoE,retrieval:Retrieval,workflow:Workflow,cache:Cache,lowrank:LowRank,reward:Reward,evals:Evals};
export default function Experiment({ type, ...props }) { const Component=components[type]; return Component?<Component {...props}/>:null; }
