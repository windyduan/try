import React from 'react';
import { Localize, LanguageContext } from './i18n.jsx';
import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from 'remotion';

export default function FlowMovie({language = "zh"}) {
  const frame = useCurrentFrame();
  const phase = Math.min(4, Math.floor(frame / 90));
  const labels = ['接收问题', '选择工具', '执行检索', '读取证据', '检查并回答'];
  const englishLabels = [['Receive','question'],['Choose','tool'],['Run','retrieval'],['Read','evidence'],['Check &','answer']];
  const colors = ['#369af4', '#ff87b4', '#ffcf32', '#43c491', '#369af4'];
  const descriptions = ['明确问题与完成条件', '生成结构化调用参数', '应用执行，返回结果', '核对资料，补充上下文', '验证覆盖，满足条件后停止'];
  return <LanguageContext.Provider value={language}><Localize><AbsoluteFill style={{ background: '#f6f1e7', fontFamily: '-apple-system, sans-serif' }}><svg viewBox="0 0 800 330" width="100%" height="100%"><text x="36" y="41" fontSize="18" fill="#57677e">一次资料查询的工具循环</text><text x="36" y="66" fontSize="13" fill="#77869a">固定脚本演示 · 非实时模型调用</text>{labels.map((label, i) => {
    const x = 42 + i * 148;
    return <g key={label}>{i < 4 && <path d={`M ${x + 117} 143 L ${x + 148} 143`} stroke="#bcb5a9" strokeWidth="2" />}{i < 4 && frame >= i * 90 && frame < (i + 1) * 90 && <circle cx={interpolate(frame, [i*90, (i+1)*90], [x+117,x+148], {extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.bezier(.3,0,.2,1)})} cy="143" r="5" fill={colors[i]} />}<rect x={x} y="104" width="117" height="78" rx="15" fill={i === phase ? colors[i] : '#fff'} stroke={colors[i]} strokeWidth="1.5" /><text x={x+58} y="127" textAnchor="middle" fontSize="12" fill={i===phase?'#193342':colors[i]}>0{i+1}</text><text x={x+58} y="154" textAnchor="middle" fontSize={language==='en'?14:17} fill={i===phase?'#193342':'#334359'}>{language==='en'?englishLabels[i].map((part,j)=><tspan key={part} x={x+58} y={148+j*18}>{part}</tspan>):label}</text></g>;
  })}<rect x="42" y="222" width="709" height="61" rx="12" fill="#fff" /><text x="64" y="247" fontSize="13" fill={colors[phase]}>当前步骤 {phase+1} / 5</text><text x="64" y="270" fontSize="17" fill="#334359">{descriptions[phase]}</text></svg></AbsoluteFill></Localize></LanguageContext.Provider>;
}
