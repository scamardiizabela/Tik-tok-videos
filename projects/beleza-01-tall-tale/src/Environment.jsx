import React from 'react';
import {staticFile} from 'remotion';
const colors=[['#ddc8b6','#f9e5bd'],['#d1e8df','#f4e5c4'],['#b6e1e5','#e9f2dc'],['#b6e1e5','#e9f2dc'],['#ebd4a5','#f4e6cb'],['#ebd4a5','#f4e6cb'],['#dbc5d9','#f4ded5'],['#dbc5d9','#f4ded5'],['#c9dbd8','#f8e3bd'],['#cfdbca','#f9e4bf'],['#e4cad9','#fae5bd']];
const environments=[0,0,1,1,2,2,3,3,4,4,5];
function Leaf({x,y,angle=0,s=1,color='#557e70'}){return <g transform={`translate(${x} ${y}) rotate(${angle}) scale(${s})`}><path d="M0 0C-75 -45 -53 -144 0 -173C55 -111 72 -43 0 0Z" fill={color}/><path d="M0 0V-150" stroke="#305b50" strokeWidth="5" fill="none"/></g>}
export function Environment({scene=0,t=0}){
 const n=typeof scene==='number'?scene:0;const palette=colors[n]||colors[0];const pan=Math.sin(t*.11)*12;const fg=Math.sin(t*.16)*6;
 return <div style={{position:'absolute',inset:0,overflow:'hidden',background:`linear-gradient(160deg,${palette[0]},${palette[1]})`,perspective:1600}}>
 <img src={staticFile(`env-${environments[n]??0}.png`)} style={{position:'absolute',width:'110%',height:'110%',left:'-5%',top:'-5%',objectFit:'cover',transform:`translate(${pan}px,${Math.sin(t*.13)*7}px) scale(${1.02+t*.0007})`,opacity:.94}}/>
 <div style={{position:'absolute',inset:0,background:'linear-gradient(180deg,rgba(255,249,232,.1),rgba(255,249,232,.02) 65%,rgba(39,63,75,.22))'}}/>
 <svg viewBox="0 0 1080 1920" style={{position:'absolute',inset:0,width:'100%',height:'100%'}}>
 <defs><radialGradient id="envLight"><stop stopColor="#fff5c5" stopOpacity=".65"/><stop offset="1" stopColor="#fff5c5" stopOpacity="0"/></radialGradient><linearGradient id="envFloor" x2="0" y2="1"><stop stopColor="#e0b78f"/><stop offset="1" stopColor="#b7876d"/></linearGradient></defs>
 <ellipse cx={790+pan} cy="230" rx="600" ry="500" fill="url(#envLight)"/>
 <g opacity=".22" transform={`translate(${pan*.45} 0)`}><path d="M80 0L780 0L1020 1150L390 1150Z" fill="#fff7d7"/><path d="M250 0L420 0L740 1090L560 1090Z" fill="#fff9e0"/></g>
 
 
 
 
 {Array.from({length:16},(_,i)=><circle key={i} cx={(i*191+Math.sin(t*.2+i)*25)%1080} cy={160+((i*167-t*10)%1000+1000)%1000} r={2+i%3} fill="#fff7d4" opacity={.12+.17*(1+Math.sin(t+i))}/>) }
 </svg>
 <img src={staticFile(`fg-${environments[n]??0}.png`)} style={{position:'absolute',left:'-2%',bottom:0,width:'104%',height:690,objectFit:'fill',transform:`translate(${fg}px,0) scale(1.025)`,pointerEvents:'none'}}/>
 </div>
}
