import React from 'react';
import {staticFile} from 'remotion';
// Source atlas is preserved unchanged. Each part is sampled via a nested SVG viewport.
export const PARTS={
 head:[7,1,342,352], backHair:[382,1,320,352], torso:[784,3,242,350], pelvis:[1100,28,318,319],
 upperL:[90,372,166,328],foreL:[429,369,187,330],upperR:[827,374,165,325],foreR:[1133,373,280,255],
 thighL:[104,726,160,351],shinL:[439,728,146,352],thighR:[816,726,170,351],shinR:[1184,726,163,353]
};
function Part({name,x,y,w,h}) {const [sx,sy,sw,sh]=PARTS[name];return <svg x={x} y={y} width={w} height={h} viewBox={`${sx} ${sy} ${sw} ${sh}`} preserveAspectRatio="none" overflow="hidden"><image href={staticFile('lia-atlas.png')} width="1448" height="1086"/></svg>}
export function Lia({x=180,y=880,scale=1,t=0,pose='explain'}) {
 const ease=z=>{z=Math.min(1,Math.max(0,z));return z*z*(3-2*z)};
 const beat=ease((1-Math.cos(t*1.1))/2);
 const wave=pose==='wave';
 const upper=wave?-108:pose==='think'?-30:-35*beat;
 const lower=wave?-12+Math.sin(t*5)*12:pose==='think'?-90:-22*beat;
 return <g transform={`translate(${x} ${y}) scale(${scale})`}>
 <ellipse cx="0" cy="2" rx="66" ry="12" fill="#153e42" opacity=".22"/>
 <g transform="translate(-24 -177) rotate(1)"><Part name="thighL" x={-24} y={0} w={48} h={92}/><g transform="translate(-3 83) rotate(-1)"><Part name="shinL" x={-23} y={0} w={46} h={96}/></g></g>
 <g transform="translate(23 -177) rotate(-2)"><Part name="thighR" x={-24} y={0} w={48} h={92}/><g transform="translate(2 83) rotate(2)"><Part name="shinR" x={-23} y={0} w={46} h={96}/></g></g>
 <g transform="translate(-42 -288) rotate(10)"><Part name="upperL" x={-18} y={0} w={40} h={100}/><g transform="translate(-12 86) rotate(-10)"><Part name="foreL" x={-34} y={0} w={45} h={94}/></g></g>
 <Part name="pelvis" x={-56} y={-195} w={112} h={113}/>
 <Part name="torso" x={-53} y={-320} w={106} h={153}/>
 <g transform={`translate(46 -284) rotate(${upper})`}><Part name="upperR" x={-19} y={0} w={41} h={104}/><g transform={`translate(12 88) rotate(${lower})`}><Part name="foreR" x={-17} y={-3} w={92} h={84}/></g></g>
 <g transform={`rotate(${wave?-4:Math.sin(t*.8)*1.2} 0 -310)`}><Part name="head" x={-78} y={-433} w={156} h={159}/></g>
 </g>
}
