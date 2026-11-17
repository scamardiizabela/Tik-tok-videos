import React from 'react';
import {AbsoluteFill,Audio,Composition,Img,Sequence,registerRoot,staticFile,useCurrentFrame} from 'remotion';
import captions from './captions.json';
import {Lia} from './rig';
const OUTLINE='#17393e',FPS=30,DURATION=70;
const clamp=x=>Math.min(1,Math.max(0,x));const smooth=x=>{x=clamp(x);return x*x*(3-2*x)};const mix=(a,b,x)=>a+(b-a)*x;const shadow={filter:'drop-shadow(0 4px 5px #092b3560)'};
function Jar({x=0,y=0,color='#75c9ee',label='',scale=1,tilt=0}){
 return <g transform={`translate(${x} ${y}) rotate(${tilt}) scale(${scale})`} style={shadow}>
  <ellipse cx="0" cy="66" rx="57" ry="11" fill="#233735" opacity=".15"/>
  <path d="M-50 -32 Q-53 -35 -53 -22 L-49 49 Q-45 61 0 63 Q45 61 49 49 L53 -22 Q53 -35 50 -32Z" fill={color} stroke={OUTLINE} strokeWidth="3"/>
  <path d="M37 -22 L34 43 Q33 52 23 55 L42 52 48 -22Z" fill="#263635" opacity=".14"/>
  <path d="M-41 -15 L-38 37" stroke="white" strokeWidth="8" opacity=".25" strokeLinecap="round"/>
  <ellipse cy="-29" rx="55" ry="12" fill="#e8e7d6" stroke={OUTLINE} strokeWidth="3"/>
  <path d="M-55 -28 L-55 -15 Q0 0 55 -15 L55 -28 Q0 -14 -55 -28Z" fill="#f8f5e7" stroke={OUTLINE} strokeWidth="3"/>
  <rect x="-39" y="9" width="78" height="29" rx="5" fill="#fff9df" opacity=".94"/>
  {label&&<text x="0" y="29" textAnchor="middle" fill={OUTLINE} fontFamily="DejaVu Sans" fontSize="13" fontWeight="bold">{label}</text>}
 </g>
}

function Drop({x,y,scale=1,color='#79dfff',phase=0}){
 return <g transform={`translate(${x} ${y}) scale(${scale}) rotate(${Math.sin(phase)*9})`} style={shadow}>
 <path d="M0 -36 C-9 -20 -27 2 -27 18 A27 27 0 0 0 27 18 C27 1 10 -20 0 -36Z" fill={color} stroke={OUTLINE} strokeWidth="3"/>
 <path d="M-11 7 Q-20 20 -10 28" stroke="white" strokeWidth="6" opacity=".65" fill="none" strokeLinecap="round"/>
 </g>
}
function Leaf({x,y,scale=1,phase=0}){
return <g transform={`translate(${x} ${y}) scale(${scale}) rotate(${Math.sin(phase)*12})`} style={shadow}><path d="M-32 24 Q-52 -34 37 -39 Q47 25 -32 24Z" fill="#a8e56d" stroke={OUTLINE} strokeWidth="3"/><path d="M-42 37 L22 -22 M-9 6 L-14 -15 M4 -5 L24 -3" stroke="#46623f" strokeWidth="3" fill="none" strokeLinecap="round"/></g>
}
function Protein({x,y,phase=0}){
return <g transform={`translate(${x} ${y}) rotate(${Math.sin(phase)*10})`} style={shadow}>
<path d="M-36 0 L0 -22 L36 0 L0 25Z" fill="none" stroke={OUTLINE} strokeWidth="10"/>
{[[-36,0],[0,-22],[36,0],[0,25]].map(([a,b],i)=><circle key={i} cx={a} cy={b} r="13" fill={i%2?'#ffd35a':'#f39bc0'} stroke={OUTLINE} strokeWidth="3"/>)}
</g>
}
function Spark({x,y,s=1,color='#fff5b9',r=0}){return <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}><path d="M0 -18 Q3 -3 17 0 Q3 3 0 18 Q-3 3 -17 0 Q-3 -3 0 -18Z" fill={color}/></g>}

import scenes from './scene-data.json';
function Shelf({x=460,y=790,w=250}){return <g><path d={`M${x-w/2+17} ${y} v95 M${x+w/2-17} ${y} v95`} stroke="#8b6639" strokeWidth="13"/><path d={`M${x-w/2} ${y} h${w}`} stroke="#213f3d" strokeWidth="19" strokeLinecap="round"/><path d={`M${x-w/2} ${y-3} h${w}`} stroke="#e6ba71" strokeWidth="12" strokeLinecap="round"/></g>}
function Label({x=420,y=350,text,size=22}){return <g transform={`translate(${x} ${y})`}><rect x={-text.length*size*.32-15} y={-size-5} width={text.length*size*.64+30} height={size+22} rx="13" fill="#133b40" fillOpacity=".94"/><text textAnchor="middle" fontFamily="DejaVu Sans" fontSize={size} fontWeight="bold" fill="#fff4d7">{text}</text></g>}
function HairModel({kind,local}){
 const z=smooth((local-2)/2),oil=kind===3,repair=kind===4;
 return <g transform="translate(477 553)"><rect x="-126" y="-205" width="252" height="443" rx="30" fill="#102e3b" fillOpacity=".93" stroke="#e2c286" strokeWidth="3"/><text y="-164" textAnchor="middle" fontFamily="DejaVu Sans" fontSize="16" letterSpacing="2" fill="#c5e6e6">FIO AMPLIADO</text>
 {[0,1].map(i=><g key={i} transform={`translate(${-40+i*80} 0)`}>
 <path d="M0 -125 C-38 -43 35 50 -4 165" stroke="#402c2a" strokeWidth="41" fill="none" strokeLinecap="round"/><path d="M0 -125 C-38 -43 35 50 -4 165" stroke="#af764e" strokeWidth="31" fill="none" strokeLinecap="round"/><path d="M-7 -125 C-45 -43 28 50 -11 165" stroke="#e4b77e" strokeWidth="6" fill="none" strokeLinecap="round"/>
 {Array.from({length:8},(_,j)=>{const yy=-108+j*34,xx=-12*Math.sin((yy+125)/290*Math.PI*2);return <path key={j} d={`M${xx-13} ${yy} q14 10 27 -1`} fill="none" stroke="#674433" strokeWidth="3"/>})}
 {oil&&<path d="M0 -125 C-38 -43 35 50 -4 165" stroke="#ffd775" strokeWidth="46" fill="none" opacity={.22*z} strokeLinecap="round"/>}
 {repair&&<><path d="M-3 160 q-24 24 -24 35 M-3 160 q25 18 27 35" stroke="#af764e" strokeWidth="7" fill="none" strokeLinecap="round"/>{[0,1,2].map(j=><g key={j} transform={`translate(${18*(1-z)} ${-65+j*65})`} opacity={z}><rect x="-18" y="-10" width="36" height="19" rx="8" fill="#f6b9cf"/><circle cx="-9" r="3" fill="#ffe3ed"/><circle cx="9" r="3" fill="#ffe3ed"/></g>)}</>}
 </g>)}
 {!oil&&!repair&&Array.from({length:5},(_,i)=>{let p=clamp((local-1-i*.22)/2);return <Drop key={i} x={mix(-110,[-50,45,-20,60,-55][i],p)} y={mix(-135+i*50,-70+i*42,p)} scale={.25}/>})}
 {oil&&[0,1,2].map(i=><Drop key={i} x={-80+i*80} y={-115+(local*.16+i*.33)%1*225} color="#f4c558" scale={.23}/>)}
 <text y="217" textAnchor="middle" fontFamily="DejaVu Sans" fontSize="15" fill="#d8edeb">Representação ilustrativa</text></g>
}
export function Action({i,t,local}){
 const concept=i>=2&&i<=4;
 return <svg width="720" height="1280" style={{position:'absolute',inset:0}}>
 <Lia x={i===7?260:170} y={865} scale={1} t={local} pose={i===7?'wave':i===0?'think':'explain'}/>
 {i<2&&<><Shelf x={465} y={744} w={280}/>{[0,1,2].map(j=><Jar key={j} x={365+j*100} y={700} scale={.68} color={['#91dfff','#b5d985','#eda3c7'][j]} label={(i===0?['HIDRATA','NUTRE','REPARA']:['ÁGUA','ÓLEOS','PROTEÍNAS'])[j]}/>)}{i===0?<text x="460" y="490" textAnchor="middle" fontSize="130" fontFamily="DejaVu Serif" fontWeight="bold" fill="#fff4ce" stroke="#17393e" strokeWidth="5" paintOrder="stroke">?</text>:<Label x={440} y={470} text="Três ideias para entender"/>}{i===0&&local>4&&<Label x={440} y={560} text="Só o nome não conta tudo" size={19}/>}</>}
 {concept&&<><HairModel kind={i} local={local}/><Shelf x={451} y={857} w={215}/><Jar x={451} y={807} scale={.78} color={['#91dfff','#b5d985','#eda3c7'][i-2]} label={['HIDRATA','NUTRE','REPARA'][i-2]}/><Label x={360} y={312} text={i===2?(local<6?'Maciez e umectantes':'Glicerina: um exemplo'):i===3?(local<7?'Menos atrito entre os fios':'A quantidade faz diferença'):(local<9?'Proteínas hidrolisadas':'Efeito temporário')}/>{i===4&&local>10&&<Label x={469} y={828} text="Não cola pontas duplas" size={17}/>}</>}
 {i===5&&<><Shelf x={470} y={820} w={260}/><Jar x={470} y={740} scale={1.25} color="#f4d887" label="FÓRMULA"/>{[0,1,2].map(j=>{const p=smooth((local-.5-j*.25)/2.1),xx=mix(360+j*105,470,p),yy=mix(440,650,p)-Math.sin(p*Math.PI)*55;return <g key={j} opacity={1-smooth((p-.82)/.18)}>{j===0?<Drop x={xx} y={yy} scale={.65}/>:j===1?<Leaf x={xx} y={yy} scale={.65}/>:<g transform={`translate(${xx} ${yy}) scale(.65)`}><Protein x={0} y={0}/></g>}</g>})}{local>2.5&&<Label x={445} y={500} text="As funções podem se misturar" size={19}/>}</>}
 {i===6&&<><Shelf x={475} y={815} w={260}/><g transform="translate(475 612)"><path d="M-108 -152 Q-50 -171 0 -143 Q55 -171 108 -152 V194 Q55 177 0 196 Q-55 178 -108 194Z" fill="#fff1cf" stroke="#183d40" strokeWidth="4"/><path d="M0 -143 V194" stroke="#d0b88c" strokeWidth="3"/><text y="-90" textAnchor="middle" fontSize="21" fontFamily="DejaVu Serif" fontWeight="bold" fill="#17393e">MODO DE USO</text>{['Leia o rótulo','Siga a aplicação','Observe seu cabelo'].map((s,j)=><g key={s} opacity={smooth((local-.3-j*.85)/.35)} transform={`translate(0 ${-23+j*65})`}><circle cx="-77" r="11" fill="#87cda4"/><path d="M-83 0 l4 4 l8 -9" fill="none" stroke="#17393e" strokeWidth="2"/><text x="-55" y="5" fontSize="14" fontFamily="DejaVu Sans" fill="#17393e">{s}</text></g>)}</g></>}
 {i===7&&<><Shelf x={485} y={825} w={170}/><Jar x={485} y={773} scale={.8} label="ESCOLHA" color="#f3d692"/><g transform={`translate(365 ${340+(1-smooth((local-1)/.5))*30})`} opacity={smooth((local-1)/.5)}><rect x="-250" y="-45" width="500" height="110" rx="24" fill="#123d42" stroke="#ecc879" strokeWidth="2"/><path d="M-206 -15 h22 v37 l-11 -8 l-11 8Z" fill="none" stroke="#ffdc91" strokeWidth="3"/><text x="15" y="-3" textAnchor="middle" fontFamily="DejaVu Sans" fontSize="25" fontWeight="bold" fill="#fff3d1">SALVE PARA A</text><text x="15" y="33" textAnchor="middle" fontFamily="DejaVu Sans" fontSize="25" fontWeight="bold" fill="#ffdc91">PRÓXIMA COMPRA</text></g></>}
 </svg>
}
function Video(){
 const frame=useCurrentFrame(),t=frame/FPS;let i=scenes.findIndex(s=>t>=s.start&&t<s.end);if(i<0)i=7;const s=scenes[i],local=t-s.start,col=i%4,row=Math.floor(i/4),cap=captions.find(c=>t>=c.start&&t<c.end);
 return <AbsoluteFill style={{backgroundColor:'#12383d',overflow:'hidden'}}>
 <Sequence from={15}><Audio src={staticFile('narration.mp3')} volume={1}/></Sequence>
 <Audio src={staticFile('soundscape.wav')} volume={f=>{const q=f/FPS;return q<1?q*.45:q>68?(70-q)*.225:.45}}/>
 <div style={{position:'absolute',inset:0,opacity:smooth(local/.18),overflow:'hidden'}}>
 <Img src={staticFile('environments.png')} style={{position:'absolute',width:3840,height:2560,maxWidth:'none',left:-col*960-120+Math.sin(local*.2)*4,top:-row*1280}}/>
 <AbsoluteFill style={{background:'linear-gradient(180deg,#092a3db0 0%,transparent 36%,transparent 68%,#0b2b3ddd 100%)'}}/>
 <Action i={i} t={t} local={local}/>
 <svg width="720" height="1280" style={{position:'absolute',inset:0,pointerEvents:'none'}}>{Array.from({length:9},(_,j)=><circle key={j} cx={55+j*77+Math.sin(t*.3+j)*12} cy={200+(j*83+t*13)%700} r={1.5+j%3} fill="#fff0be" opacity={.15+.1*Math.sin(t+j)}/>)}</svg>
 <div style={{position:'absolute',top:135,left:52,right:105,textAlign:'center',color:'#fff7de',fontFamily:'DejaVu Serif',fontWeight:700,fontSize:i===7?39:45,lineHeight:1.13,textShadow:'0 3px 1px #173d43,0 4px 14px #062c38'}}>{s.title}</div>
 {cap&&<div style={{position:'absolute',left:52,right:108,top:1000,minHeight:125,display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center',fontFamily:'DejaVu Sans',fontSize:33,fontWeight:700,lineHeight:1.3,color:'#fff7df',textShadow:'-2px -2px #102e3b,2px 2px #102e3b,-2px 2px #102e3b,2px -2px #102e3b,0 4px 12px #102e3b'}}>{cap.text}</div>}
 <div style={{position:'absolute',left:55,right:110,bottom:105,height:3,background:'#ffffff30'}}><div style={{height:3,width:`${t/70*100}%`,background:s.color}}/></div>
 </div><AbsoluteFill style={{background:'#12383d',opacity:smooth((t-69.2)/.8)}}/>
 </AbsoluteFill>
}
registerRoot(()=> <Composition id="Beleza01" component={Video} width={720} height={1280} fps={FPS} durationInFrames={DURATION*FPS}/>);
