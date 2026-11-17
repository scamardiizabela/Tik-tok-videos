const esbuild=require('esbuild'),fs=require('fs'),React=require('react'),{renderToStaticMarkup}=require('react-dom/server'),sharp=require('sharp');
(async()=>{
await esbuild.build({entryPoints:['src.jsx'],outfile:'qa/frame-module.cjs',bundle:true,platform:'node',format:'cjs',external:['react','react-dom','remotion'],loader:{'.jsx':'jsx'}});
const {Action}=require('./qa/frame-module.cjs');
const scenes=require('./scene-data.json'),caps=require('./captions.json');
const image=n=>'data:image/png;base64,'+fs.readFileSync('public/'+n).toString('base64');
for(const t of [2,10.5,16,27,40,50,58,65]){
const i=scenes.findIndex(s=>t>=s.start&&t<s.end),s=scenes[i],local=t-s.start,col=i%4,row=Math.floor(i/4),cap=caps.find(c=>t>=c.start&&t<c.end);
let action=renderToStaticMarkup(React.createElement(Action,{i,t,local}));
action=action.replaceAll('/lia-atlas.png',image('lia-atlas.png')).replaceAll('/public'+image('lia-atlas.png'),image('lia-atlas.png'));
let svg=`<svg xmlns="http://www.w3.org/2000/svg" width="720" height="1280"><defs><linearGradient id="shade" x2="0" y2="1"><stop stop-color="#092a3d" stop-opacity=".65"/><stop offset=".35" stop-color="#092a3d" stop-opacity="0"/><stop offset=".7" stop-color="#092a3d" stop-opacity="0"/><stop offset="1" stop-color="#092a3d" stop-opacity=".85"/></linearGradient></defs><image href="${image('environments.png')}" x="${-col*960-120}" y="${-row*1280}" width="3840" height="2560"/><rect width="720" height="1280" fill="url(#shade)"/>${action}<text x="334" y="180" text-anchor="middle" fill="#fff7de" stroke="#173d43" stroke-width="1" font-family="DejaVu Serif" font-size="36" font-weight="bold">${s.title}</text>`;
if(cap){let words=cap.text.split(' '),mid=Math.ceil(words.length/2);for(const [j,line]of [words.slice(0,mid).join(' '),words.slice(mid).join(' ')].entries())svg+=`<text x="330" y="${1040+j*43}" text-anchor="middle" fill="#fff7df" stroke="#102e3b" stroke-width="1" font-family="DejaVu Sans" font-size="31" font-weight="bold">${line}</text>`;}
svg+='</svg>';fs.writeFileSync(`qa/frame-${t}.svg`,svg);await sharp(Buffer.from(svg)).png().toFile(`qa/frame-${t}.png`);console.log('REVIEW',t);
}
})().catch(e=>{console.error(e);process.exit(1)});
