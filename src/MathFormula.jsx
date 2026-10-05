import React from 'react';
import katex from 'katex';
export default function MathFormula({value,inline=false}){
 const html=katex.renderToString(value,{displayMode:!inline,throwOnError:false,output:'htmlAndMathml'});
 return <div className={inline?'inline-formula':'formula'} dangerouslySetInnerHTML={{__html:html}}/>;
}
