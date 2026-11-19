import React from 'react';
import {Img,staticFile} from 'remotion';

// Screen-side names are deliberate: screen-right is the presenter's anatomical
// LEFT arm. The pointing hand belongs on that side, facing the products.
const sizes={torso:[314,313],'arm-left':[313,313],'arm-right':[300,313],
 'forearm-left':[306,313],'forearm-right':[295,284],
 'thigh-left':[313,313],'thigh-right':[296,313],'shin-left':[312,313],
 'shin-right':[267,301],'head-neutral':[283,304],'head-curious':[313,304],
 'head-surprised':[311,308],'head-happy':[293,304]};
const Sprite=({name,ax,ay,k=1,mirror=false,opacity=1})=>{
 const [w,h]=sizes[name];
 return <div style={{position:'absolute',width:0,height:0,opacity,transform:mirror?'scaleX(-1)':undefined}}>
  <Img src={staticFile(`character/${name}.png`)} style={{position:'absolute',left:-ax*k,top:-ay*k,width:w*k,height:h*k}}/>
 </div>;
};
const Socket=({x=0,y=0,angle=0,children,z=0})=><div style={{position:'absolute',left:x,top:y,width:0,height:0,transform:`rotate(${angle}deg)`,transformOrigin:'0 0',zIndex:z}}>{children}</div>;
const clamp=v=>Math.max(0,Math.min(1,v));
const ease=v=>{v=clamp(v);return v*v*(3-2*v)};
const rest={sr:-6,rw:85,sl:3,lw:113,body:0,head:0};
const present={sr:-10,rw:-49,sl:0,lw:100,body:1.6,head:3};
const low={...present,sr:-8,rw:-40,head:5};
const high={...present,sr:-18,rw:-65,head:-3};
const explain={sr:-11,rw:-61,sl:-5,lw:-55,body:-1.2,head:-2};
const caution={sr:-12,rw:35,sl:-5,lw:-61,body:-2,head:-4};
const open={sr:-13,rw:-66,sl:-3,lw:-56,body:0,head:1};
const pose=(base,changes={})=>({...base,...changes});
// Explicit action phrases: settle -> anticipation -> extension -> hold -> release.
// Each scene has its own blocking; there is no repeating arm oscillator.
const tracks=[
 [[0,pose(rest,{head:-5})],[.11,pose(caution,{head:-7})],[.32,explain],[.56,pose(explain,{sr:-11,rw:-48,head:3})],[.82,caution],[1,rest]],
 [[0,rest],[.1,pose(rest,{sr:2,rw:96,head:-3})],[.22,high],[.39,present],[.55,low],[.68,present],[.86,pose(rest,{head:3})],[1,rest]],
 [[0,rest],[.07,pose(rest,{sr:1,rw:95})],[.19,present],[.39,low],[.56,pose(low,{sr:-12,rw:-45,head:2})],[.72,pose(rest,{sl:-5,lw:-55,head:-2})],[.9,present],[1,pose(present,{head:0})]],
 [[0,rest],[.14,pose(rest,{head:-4})],[.34,explain],[.66,pose(explain,{sr:-9,rw:-45,head:4})],[.88,pose(caution,{head:1})],[1,rest]],
 [[0,rest],[.08,pose(rest,{head:-3})],[.22,explain],[.44,pose(explain,{sr:-10,rw:-44,sl:3,lw:104,head:4})],[.65,pose(explain,{sr:-8,rw:-49,body:2,head:0})],[.84,caution],[1,rest]],
 [[0,rest],[.14,pose(rest,{head:4})],[.32,caution],[.6,pose(caution,{head:4,body:1})],[.84,explain],[1,rest]],
 [[0,rest],[.08,pose(rest,{sr:1,rw:95})],[.2,high],[.4,low],[.58,pose(low,{sr:-11,rw:-47,head:4})],[.74,pose(rest,{sl:-5,lw:-55})],[.89,present],[1,rest]],
 [[0,rest],[.18,caution],[.42,pose(caution,{head:4,body:1})],[.64,explain],[.83,pose(caution,{head:-3})],[1,rest]],
 [[0,rest],[.12,pose(rest,{sl:-1,head:-4})],[.28,open],[.53,pose(explain,{sr:-12,rw:-76,sl:3,lw:-43,head:3})],[.76,pose(open,{head:-2})],[1,rest]],
 [[0,rest],[.12,pose(rest,{sr:2,rw:95})],[.25,high],[.43,present],[.61,low],[.78,pose(rest,{sl:-5,lw:-55,head:2})],[1,rest]],
 [[0,rest],[.17,open],[.4,pose(open,{sl:-5,lw:-70,head:-3})],[.61,pose(open,{sl:-3,lw:-55,head:3})],[.83,pose(explain,{head:0})],[1,pose(rest,{head:2})]],
];
const durations=[3.65,5.73,9.12,2.85,7.25,5,9.9,4.2,7.1,7.1,6.9];
function sample(track,u){
 for(let i=1;i<track.length;i++){
  if(u<=track[i][0]){
   const [a,A]=track[i-1],[b,B]=track[i],q=ease((u-a)/(b-a));
   return Object.fromEntries(Object.keys(rest).map(k=>[k,A[k]+(B[k]-A[k])*q]));
  }
 }
 return track[track.length-1][1];
}
function Arm({side,shoulder,worldDirection,point=false}){
 const left=side==='left';
 // Source measurements: shoulder to cuff. Attach 5 px inside the painted cuff
 // so the dark outline remains continuous during all elbow rotations.
 const elbow={x:left?-26.5:28,y:101};
 const palm=!left&&!point;
 const nativeDirection=left?-66:palm?-114:-25;
 const elbowRotation=worldDirection-shoulder-nativeDirection;
 return <Socket x={left?201:318} y={238} angle={shoulder} z={left?7:8}>
  <Sprite name={`arm-${side}`} ax={left?155:149} ay={44} k={.53}/>
  <Socket x={elbow.x} y={elbow.y} angle={elbowRotation}>
   <Sprite name={left||palm?'forearm-left':'forearm-right'} ax={left||palm?100:44} ay={left||palm?266:190} k={left||palm?.40:.43} mirror={palm}/>
  </Socket>
 </Socket>;
}
function Leg({side,t,walk}){
 const left=side==='left',phase=t*6+(left?0:Math.PI);
 const swing=walk?Math.sin(phase)*13:0;
 return <Socket x={left?232:292} y={398} angle={swing} z={left?1:2}>
  <Socket x={left?1:-1} y={101} angle={walk?Math.max(0,Math.cos(phase))*20:0}>
   <Sprite name={`shin-${side}`} ax={left?154:111} ay={22} k={.54}/>
  </Socket>
  <Sprite name={`thigh-${side}`} ax={left?160:152} ay={20} k={.50}/>
 </Socket>;
}
export function Rig({t=0,scene=0,duration,mood='curious',gesture='point',scale=1,x=0,y=0,walk=false,speaking=0}){
 const s=Math.max(0,Math.min(10,scene)),d=duration||durations[s];
 const u=clamp(t/d),p=sample(tracks[s],u);
 // In a close-up the eyes alternate between audience and object at deliberate
 // phrase boundaries. Expression changes land on the head turn, not every frame.
 const faceKeys=s===10?[[0,'neutral'],[.18,'happy']]:s===0?[[0,'surprised'],[.3,'curious'],[.7,'neutral']]:[[0,'neutral'],[.24,'curious'],[.66,'neutral']];
 let faceIndex=0;
 for(let i=1;i<faceKeys.length;i++)if(u>=faceKeys[i][0])faceIndex=i;
 const face=faceKeys[faceIndex][1],previousFace=faceKeys[Math.max(0,faceIndex-1)][1];
 const faceMix=faceIndex===0?1:ease((t-faceKeys[faceIndex][0]*d)/.16);
 const breathe=Math.sin(t*1.7)*.65;
 const emphasis=Math.max(0,Math.min(1,speaking))*1.2;
 const headAnchors={neutral:133,curious:161,surprised:160,happy:161};
 const pointing=[1,2,6,9].includes(s);
 return <div style={{position:'absolute',left:x,top:y,width:520,height:700,transform:`scale(${scale})`,transformOrigin:'0 0',zIndex:8}}>
  <div style={{position:'absolute',left:201,top:640,width:126,height:15,borderRadius:'50%',background:'#332c493b',filter:'blur(5px)'}}/>
  <Leg side="left" t={t} walk={walk}/><Leg side="right" t={t} walk={walk}/>
  <Socket x={260} y={398} angle={p.body} z={5}>
   <div style={{position:'absolute',left:-260,top:-398+breathe-emphasis}}>
    <Socket x={260} y={211} z={5}><Sprite name="torso" ax={162} ay={16} k={.68}/></Socket>
    <div style={{position:'absolute',left:247,top:205,width:29,height:29,borderRadius:'10px 10px 14px 14px',background:'#c98e65',border:'2px solid #613b2e',zIndex:4}}/>
    <Arm side="left" shoulder={p.sl} worldDirection={p.lw}/>
    <Arm side="right" shoulder={p.sr} worldDirection={p.rw} point={pointing}/>
    <Socket x={260} y={223} angle={p.head-emphasis*.7} z={9}>
     {faceMix<1&&<Sprite name={`head-${previousFace}`} ax={headAnchors[previousFace]} ay={291} k={.64} opacity={1-faceMix}/>}
     <Sprite name={`head-${face}`} ax={headAnchors[face]} ay={291} k={.64} opacity={faceMix}/>
    </Socket>
   </div>
  </Socket>
 </div>;
}
