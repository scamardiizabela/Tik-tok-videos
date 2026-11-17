// Some container hosts cannot enumerate interfaces; local rendering only needs loopback.
const os=require('os');
const interfaces=os.networkInterfaces;
os.networkInterfaces=()=>{try{return interfaces()}catch{return {lo:[{address:'127.0.0.1',family:'IPv4',internal:true,netmask:'255.0.0.0',cidr:'127.0.0.1/8',mac:'00:00:00:00:00:00'}]}}};
const {bundle}=require('@remotion/bundler');
const {selectComposition,renderStill,renderMedia}=require('@remotion/renderer');
const path=require('path');
const fs=require('fs');
(async()=>{
 const serveUrl=await bundle({entryPoint:path.resolve('src.jsx'),publicDir:path.resolve('public')});
 const common={serveUrl,browserExecutable:process.env.REMOTION_BROWSER_EXECUTABLE||undefined,chromiumOptions:{gl:'swangle',disableWebSecurity:false},timeoutInMilliseconds:60000};
 const composition=await selectComposition({...common,id:'Beleza01'});
 fs.mkdirSync('qa',{recursive:true});
 if(process.argv.includes('--stills')){
  for(const t of [2,10.5,16,27,40,50,58,65]){
   await renderStill({...common,composition,frame:Math.floor(t*30),output:`qa/frame-${t}.png`});
   console.log('Still',t);
  }
 }else{
  let last=-1;
  await renderMedia({...common,composition,codec:'h264',outputLocation:'beleza-01-hidratacao-nutricao-reconstrucao.mp4',crf:18,x264Preset:'fast',pixelFormat:'yuv420p',audioCodec:'aac',audioBitrate:'192k',concurrency:4,onProgress:p=>{const n=Math.floor(p.progress*10);if(n!==last){last=n;console.log('Render',n*10+'%')}}});
  console.log('RENDER_COMPLETE');
 }
})().catch(e=>{console.error(e);process.exit(1)});
