import React from 'react';
import {Img,staticFile} from 'remotion';
// Socket-based rig. Sprite coordinates are measured on source PNGs; every limb
// is drawn around its anatomical socket instead of a padded atlas cell centre.
const Sprite=({name,ax,ay,k=1,style={}})=><Img src={staticFile(`character/${name}.png`)} style={{position:'absolute',left:-ax*k,top:-ay*k,width:(name.startsWith('head')?({neutral:283,curious:313,surprised:311,happy:293}[name.slice(5)]||313):({torso:314,'arm-left':313,'arm-right':300,'forearm-left':306,'forearm-right':295,'thigh-left':313,'thigh-right':296,'shin-left':312,'shin-right':267}[name]||313))*k,height:(name.startsWith('head')?(name==='head-surprised'?308:304):({'forearm-right':284,'shin-right':301}[name]||313))*k,...style}}/>;
const Socket=({x,y,angle=0,children,z=0})=><div style={{position:'absolute',left:x,top:y,width:0,height:0,transform:`rotate(${angle}deg)`,transformOrigin:'0 0',zIndex:z}}>{children}</div>;
function Arm({side,t,gesture}){
 const left=side==='left',point=['point','hold'].includes(gesture)&&!left,welcome=gesture==='welcome',hold=gesture==='hold'&&left;
 // Forearms overlap the sleeve cuff by 12–18 px. There is no independent drift.
 const shoulder=left?(hold?-13:welcome?20:2+Math.sin(t*1.2)*2):(point?-57+Math.sin(t*.85)*3:welcome?-35:-3+Math.sin(t*1.2+.3)*2);
 const forearm=left?(hold?260:welcome?145:180+Math.sin(t*.9)*2):(point?58+Math.sin(t*.9)*3:welcome?48:103+Math.sin(t*.9)*2);
 const k=.53;
 return <Socket x={left?201:318} y={238} angle={shoulder} z={left?(hold?8:2):7}>
  <Sprite name={`arm-${side}`} ax={left?155:149} ay={44} k={k}/>
  <Socket x={left?-25:30} y={96} angle={forearm}>
   <Sprite name={`forearm-${side}`} ax={left?100:44} ay={left?266:190} k={left?.40:.43}/>
   {hold&&<Socket x={26} y={-68} angle={-forearm-shoulder}><svg width="72" height="78" viewBox="0 0 72 78" style={{position:'absolute',left:-27,top:-74,overflow:'visible'}}><path d="M7 22H65L61 66Q36 76 11 66Z" fill="#ad9bd3" stroke="#49354c" strokeWidth="3"/><ellipse cx="36" cy="22" rx="29" ry="8" fill="#cbbbe7" stroke="#49354c" strokeWidth="3"/><rect x="7" y="11" width="58" height="13" rx="5" fill="#fff4da" stroke="#49354c" strokeWidth="3"/><rect x="22" y="37" width="29" height="20" rx="6" fill="#fff4da"/><path d="M30 43H43M30 49H40" stroke="#7a628f" strokeWidth="2"/></svg></Socket>}
  </Socket>
 </Socket>;
}
function Leg({side,t,walk}){
 const left=side==='left',phase=t*6+(left?0:Math.PI);
 // Idle feet remain planted. Walking is only enabled by a translating actor.
 const swing=walk?Math.sin(phase)*13:0;
 return <Socket x={left?232:292} y={398} angle={swing} z={left?1:2}>
  <Sprite name={`thigh-${side}`} ax={left?160:152} ay={20} k={.50}/>
  <Socket x={left?1:-1} y={124} angle={walk?Math.max(0,Math.cos(phase))*20:0}>
   <Sprite name={`shin-${side}`} ax={left?154:111} ay={22} k={.54}/>
  </Socket>
 </Socket>;
}
export function Rig({t=0,mood='curious',gesture='point',scale=1,x=0,y=0,walk=false}){
 const face=['neutral','curious','surprised','happy'].includes(mood)?mood:'curious';
 // Local contact plane = y670. Head/torso breathe above a fixed pelvis/feet.
 const breathe=Math.sin(t*1.7)*1.1;
 const headX={neutral:133,curious:161,surprised:160,happy:161}[face];
 return <div style={{position:'absolute',left:x,top:y,width:520,height:700,transform:`scale(${scale})`,transformOrigin:'0 0',zIndex:8}}>
  <div style={{position:'absolute',left:201,top:663,width:126,height:15,borderRadius:'50%',background:'#332c493b',filter:'blur(5px)'}}/>
  <Leg side="left" t={t} walk={walk}/><Leg side="right" t={t} walk={walk}/>
  <div style={{position:'absolute',inset:0,transform:`translateY(${breathe}px)`}}>
   <Arm side="left" t={t} gesture={gesture}/>
   <Socket x={260} y={211} z={5}><Sprite name="torso" ax={162} ay={16} k={.68}/></Socket>
   {/* A short neck fills the chin-to-collar socket, behind both source pieces. */}
   <div style={{position:'absolute',left:247,top:192,width:29,height:42,borderRadius:'10px 10px 14px 14px',background:'#c98e65',border:'2px solid #613b2e',zIndex:4}}/>
   <Arm side="right" t={t} gesture={gesture}/>
   <Socket x={260} y={208} angle={Math.sin(t*1.1)*1.3} z={9}><Sprite name={`head-${face}`} ax={headX} ay={291} k={.64}/></Socket>
  </div>
 </div>;
}
