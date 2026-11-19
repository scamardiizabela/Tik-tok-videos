import React from 'react';
import {registerRoot,Composition,AbsoluteFill,Audio,Img,staticFile,useCurrentFrame,interpolate,Easing} from 'remotion';
import {Rig} from './Rig';
import {Environment} from './Environment';
import {Didactic} from './Didactic';
import words from '../words.json';
const cuts=[0,3.65,9.38,18.5,21.35,28.6,33.6,43.5,47.7,54.8,61.9,68.8];
const titles=['O NOME NO POTE','TRÊS FUNÇÕES','HIDRATAÇÃO','UMECTANTES','NUTRIÇÃO','A DOSE IMPORTA','RECONSTRUÇÃO','EFEITO TEMPORÁRIO','FÓRMULAS SE MISTURAM','OBSERVE SEU CABELO','ANTES DA PRÓXIMA COMPRA'];
const colors=['#bda0df','#e6bb55','#65ced2','#65ced2','#e5b458','#e5b458','#bda0df','#bda0df','#8cbbad','#8cbbad','#e8b791'];
export function Film(){
 const frame=useCurrentFrame(),time=frame/30;
 const scene=Math.min(10,cuts.findIndex((v,i)=>i<11&&time>=v&&time<cuts[i+1]));
 const s=Math.max(0,scene),t=time-cuts[s];
 const current=words.find(w=>time>=w.start&&time<w.end+.035);
 const last=words.filter(w=>w.start<=time).slice(-1)[0];
 const word=current||((last&&time-last.end<.13)?last:null);
 const mood=s===0||s===7?'surprised':s===10?'happy':s===4||s===6?'neutral':'curious';
 const enter=interpolate(t,[0,2.8,3.1,5.5,5.85,12],[1,1.025,1.055,1.065,1.025,1.06],{extrapolateRight:'clamp',easing:Easing.inOut(Easing.cubic)});
 return <AbsoluteFill style={{background:'#ede2d8',fontFamily:'Arial, sans-serif',overflow:'hidden'}}>
 <div style={{position:'absolute',inset:0,transform:`scale(${enter})`,transformOrigin:'50% 62%'}}><Environment scene={s} t={t}/>
 <div style={{position:'absolute',inset:0,transform:'none',transformOrigin:'50% 65%'}}>
 <Didactic scene={s} t={t} frame={frame}/>
 <Rig t={time} mood={mood} gesture={s===10?'welcome':[0,5,9].includes(s)?'hold':'point'} x={s===0||s===10?-45:-25} y={([0,1,10].includes(s)?1550:[6,7].includes(s)?1500:[4,5].includes(s)?1330:1240)-670*1.03} scale={1.03}/>
 </div></div>
 <div style={{position:'absolute',left:72,right:95,top:120,display:'flex',alignItems:'center',gap:16}}>
 <div style={{height:7,width:60,borderRadius:4,background:colors[s]}}/>
 <span style={{fontSize:23,fontWeight:800,letterSpacing:4,color:'#342b42',textShadow:'0 1px 12px #fff'}}>CUIDADO EM CAMADAS</span></div>
 {s===0&&<div style={{position:'absolute',top:177,left:72,right:110,color:'#30263f',fontSize:45,fontWeight:900,letterSpacing:-1,lineHeight:1.1,textShadow:'0 2px 15px #fff9'}}>{titles[s]}</div>}
 {s>=2&&s<=8&&<div style={{position:'absolute',left:75,top:294,color:'#45344f',fontSize:21,fontWeight:700,letterSpacing:2,background:'#fffb',borderRadius:30,padding:'10px 20px'}}>REPRESENTAÇÃO ILUSTRATIVA</div>}
 <div style={{position:'absolute',left:55,right:125,top:1395,height:200,display:'flex',alignItems:'center',justifyContent:'center',textAlign:'center'}}>
 {word&&<span style={{fontSize:word.text.length>15?61:76,fontWeight:900,color:'white',WebkitTextStroke:'3px #30263f',paintOrder:'stroke fill',textShadow:'0 5px 12px #0009',lineHeight:1.1}}>{word.text}</span>}
 </div>
 <div style={{position:'absolute',bottom:145,left:75,right:135,height:3,background:'#fff7',borderRadius:9}}><div style={{width:`${Math.min(100,time/68.8*100)}%`,height:'100%',background:'#715297'}}/></div>
 <Audio src={staticFile('audio/narration.mp3')} volume={1}/>
 <Audio src={staticFile('audio/music.wav')} volume={.16}/>
 <Audio src={staticFile('audio/effects.wav')} volume={.32}/>
 </AbsoluteFill>;
}
registerRoot(()=> <Composition id="Beleza01TallTale" component={Film} durationInFrames={2064} fps={30} width={1080} height={1920}/>);
