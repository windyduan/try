import React, { useContext,lazy,Suspense } from 'react';
import { LanguageContext } from './i18n.jsx';
const MathFormula=lazy(()=>import('./MathFormula.jsx'));

export const fmt = (n, places = 2) => Number.isFinite(n) ? n.toFixed(places) : '—';
export const pct = n => n == null ? '无定义' : `${(n * 100).toFixed(1)}%`;

export function Formula({ value, inline = false }) {
  return <Suspense fallback={<div className={inline?'inline-formula':'formula'} aria-busy="true">{value}</div>}><MathFormula value={value} inline={inline}/></Suspense>;
}

export function Range({ label, value, min, max, step = .01, onChange, unit = '', display }) {
  return <label className="range-control"><span><span>{label}</span><output>{display ?? fmt(value)}{unit}</output></span><input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} aria-label={label} style={{ '--range-progress': `${(value - min) / (max - min) * 100}%` }} /></label>;
}

export function Segments({ label, value, options, onChange }) {
  return <div className="segment-control"><span className="control-label">{label}</span><div className="segments" role="group" aria-label={label}>{options.map(([v, text]) => <button key={v} type="button" aria-pressed={value === v} className={value === v ? 'selected' : ''} onClick={() => onChange(v)}>{text}</button>)}</div></div>;
}

export function Metric({ label, value, note, tone = 'blue' }) {
  return <div className={`metric ${tone}`}><span>{label}</span><strong>{value}</strong>{note && <small>{note}</small>}</div>;
}

Metric.isDisplayValue = true;

export function LabLayout({ children, controls, footer, className = '' }) {
  const language=useContext(LanguageContext);
  return <><div className={`lab-layout ${className}`}><div className="lab-visual">{children}</div><span className="diagram-scroll-hint">{language==='en'?'Swipe the diagram to inspect it':'图形可横向滑动查看'}</span><div className="lab-controls">{controls}</div></div>{footer && <div className="lab-footer">{footer}</div>}</>;
}

export function Legend({ items }) {
  return <div className="legend">{items.map(([color, label]) => <span key={label}><i style={{ background: color }} />{label}</span>)}</div>;
}

export function Plot({ children, title = '交互图', yLabel = 'y', xLabel = 'x', grid = true }) {
  return <svg className="plot" viewBox="0 0 620 340" role="img" aria-label={title}><defs><clipPath id="plot-clip"><rect x="48" y="28" width="548" height="278" /></clipPath><linearGradient id="area-blue" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#7195d3" stopOpacity=".35" /><stop offset="100%" stopColor="#7195d3" stopOpacity=".02" /></linearGradient></defs>{grid && <g stroke="#e8edf3" strokeWidth="1">{[48, 139, 230, 321, 412, 503, 594].map(x => <line key={`x${x}`} x1={x} x2={x} y1="28" y2="306" />)}{[28, 97, 167, 236, 306].map(y => <line key={`y${y}`} x1="48" x2="596" y1={y} y2={y} />)}</g>}<line x1="48" x2="596" y1="306" y2="306" stroke="#9ba9bb" /><line x1="48" x2="48" y1="28" y2="306" stroke="#9ba9bb" /><text x="590" y="333" className="svg-label">{xLabel}</text><text x="14" y="25" className="svg-label">{yLabel}</text>{children}</svg>;
}

export function Bars({ labels, values, active, onSelect }) {
  return <div className="bars">{labels.map((label, i) => <div className={`bar-row ${active != null && active !== i ? 'dimmed' : ''}`} key={label}>{onSelect ? <button onClick={() => onSelect(i)} className="bar-label" aria-pressed={active === i}>{label}</button> : <span className="bar-label">{label}</span>}<div className="bar-track"><div style={{ width: `${values[i] * 100}%` }} /></div><output>{pct(values[i])}</output></div>)}</div>;
}
