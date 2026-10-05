import {
 BookOpen,MoveUpRight,ChartSpline,Dices,ChartScatter,GitFork,SlidersHorizontal,
 Network,Mountain,Scan,Layers3,WholeWord,Repeat2,Languages,Focus,BookText,Box,
 Shapes,Files,Workflow,Gauge,GitBranch,BrainCircuit,ClipboardCheck,Hash,
 TextCursorInput,ListTree,Scale,Paintbrush,Image,Blocks,Server,Cable,Cpu,
 Binary,Atom,DatabaseZap,ChartColumn,MessageSquareText,Puzzle,Wrench,
 RefreshCcw,Settings2,Building2,Axis3D,GraduationCap
} from 'lucide-react';

export const topicIcons={
 intro:BookOpen,vectors:MoveUpRight,calculus:ChartSpline,probability:Dices,
 regression:ChartScatter,pytorch:GitFork,classification:SlidersHorizontal,
 neural:Network,optimization:Mountain,convolution:Scan,architectures:Layers3,
 nlp:WholeWord,rnn:Repeat2,translation:Languages,transformer:Focus,
 pretraining:BookText,llama:Box,deepseek:Shapes,rag:Files,agents:Workflow,
 inference:Gauge,lora:GitBranch,reasoning:BrainCircuit,evals:ClipboardCheck,
 embeddings:Hash,context:TextCursorInput,cot:ListTree,alignment:Scale,
 diffusion:Paintbrush,multimodal:Image,'new-architectures':Blocks,infra:Server,
 distributed:Cable,gpu:Cpu,quantization:Binary,ai4s:Atom,'data-pipeline':DatabaseZap,
 results:ChartColumn,prompting:MessageSquareText,skills:Puzzle,harness:Wrench,
 rsi:RefreshCcw,tuning:Settings2,industry:Building2
};
export const groupIcons={
 foundations:Axis3D,training:ChartSpline,architecture:Layers3,practice:GraduationCap,
 representation:Shapes,systems:Server,science:Atom,work:Wrench
};
export const iconFor=topic=>topicIcons[topic.id]??BookOpen;
