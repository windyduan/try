export const NOTE_KEY='try-v5-notebook';
export const tagColors={blue:'#369af4',cyan:'#28c5d8',green:'#43c491',lime:'#a2d33e',yellow:'#ffcf32',orange:'#ff9d28',red:'#ff746b',pink:'#ff87b4'};
const invalid=()=>{throw new Error('INVALID_NOTEBOOK');};
const text=(v,max)=>typeof v==='string'&&v.length<=max?v:invalid();
const date=v=>typeof v==='string'&&Number.isFinite(Date.parse(v))?v:invalid();
export function validateNote(n){
 if(!n||typeof n!=='object'||Array.isArray(n))return invalid();
 const id=text(n.id,100);if(!id||!Array.isArray(n.tags)||n.tags.length>12)return invalid();
 return {id,topicId:text(n.topicId,100),title:text(n.title,100),body:text(n.body,20000),emoji:text(n.emoji,64),tags:n.tags.map(t=>{if(!t||!Object.hasOwn(tagColors,t.color))return invalid();return {label:text(t.label,24),color:t.color};}),createdAt:date(n.createdAt),updatedAt:date(n.updatedAt),deletedAt:n.deletedAt==null?null:date(n.deletedAt)};
}
export function notebookRecord(notes){return {type:'try-notebook',version:1,savedAt:new Date().toISOString(),notes:notes.map(validateNote)};}
export function parseNotebook(value){
 if(typeof value==='string'){if(value.length>2000000)return invalid();value=JSON.parse(value);}
 if(!value||value.type!=='try-notebook'||value.version!==1||!Array.isArray(value.notes)||value.notes.length>1000)return invalid();
 const notes=value.notes.map(validateNote);if(new Set(notes.map(n=>n.id)).size!==notes.length)return invalid();return notes;
}
export function mergeNotes(current,incoming){
 const merged=new Map(current.map(n=>[n.id,validateNote(n)]));
 incoming.forEach(n=>{n=validateNote(n);const old=merged.get(n.id);if(!old||Date.parse(n.updatedAt)>Date.parse(old.updatedAt))merged.set(n.id,n);});
 if(merged.size>1000)return invalid();return [...merged.values()];
}
export function createNote(topicId='',now=new Date().toISOString(),id=crypto.randomUUID()){
 return {id,topicId,title:'',body:'',emoji:'📝',tags:[],createdAt:now,updatedAt:now,deletedAt:null};
}
