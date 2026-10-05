export const clamp=(v,min,max)=>Math.max(min,Math.min(max,v));
export function fibonacciSphere(count){
  if(count<1)return [];
  return Array.from({length:count},(_,i)=>{const y=1-2*(i+.5)/count,r=Math.sqrt(1-y*y),angle=i*Math.PI*(3-Math.sqrt(5));return [Math.cos(angle)*r,y,Math.sin(angle)*r];});
}
export function rotatePoint([x,y,z],yaw,pitch){
  const a=x*Math.cos(yaw)+z*Math.sin(yaw),b=-x*Math.sin(yaw)+z*Math.cos(yaw);
  return [a,y*Math.cos(pitch)-b*Math.sin(pitch),y*Math.sin(pitch)+b*Math.cos(pitch)];
}
export function projectPoint(point,{yaw=0,pitch=0,cx=0,cy=0,radius=1,camera=4}={}){
  const [x,y,z]=rotatePoint(point,yaw,pitch),scale=camera/(camera-z);
  return {x:cx+x*radius*scale,y:cy+y*radius*scale,z,scale};
}
export function sphereArc(a,b,t,lift=.08){
  const d=clamp(a.reduce((s,v,i)=>s+v*b[i],0),-1,1),angle=Math.acos(d),s=Math.sin(angle);
  const weights=Math.abs(s)<1e-6?[1-t,t]:[Math.sin((1-t)*angle)/s,Math.sin(t*angle)/s];
  const v=a.map((x,i)=>x*weights[0]+b[i]*weights[1]),length=Math.hypot(...v)||1;
  return v.map(x=>x/length*(1+Math.sin(Math.PI*t)*lift));
}
export function parseProgress(value,knownIds){
  if(typeof value==='string')value=JSON.parse(value);
  if(!value||![2,3,4,5].includes(value.version)||!Array.isArray(value.learned))throw new Error('INVALID_PROGRESS');
  const allowed=new Set(knownIds);
  return [...new Set(value.learned.filter(id=>typeof id==='string'&&allowed.has(id)))];
}
export function progressRecord(learned){return {version:5,learned:[...new Set(learned)],savedAt:new Date().toISOString()};}
export const quantize=(values,bits)=>{const levels=2**bits-1,approx=values.map(x=>Math.round((clamp(x,-1,1)+1)/2*levels)/levels*2-1);return {approx,mse:values.reduce((s,x,i)=>s+(x-approx[i])**2,0)/values.length,levels:levels+1};};
