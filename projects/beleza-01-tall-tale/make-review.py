from pathlib import Path
from PIL import Image,ImageDraw
import subprocess,json,hashlib
p=Path(__file__).resolve().parent
video=p/'renders/beleza-01-tall-tale.mp4'
frames=p/'review/frames';frames.mkdir(exist_ok=True)
subprocess.run(['ffmpeg','-hide_banner','-loglevel','error','-i',str(video),'-vf','fps=2,scale=270:480','-q:v','3',str(frames/'%04d.jpg')],check=True)
cuts=[0,3.65,9.38,18.5,21.35,28.6,33.6,43.5,47.7,54.8,61.9,68.8]
for scene in range(11):
 sheet=Image.new('RGB',(1080,1020),'#24202e');d=ImageDraw.Draw(sheet)
 for j in range(8):
  t=cuts[scene]+(cuts[scene+1]-cuts[scene])*(.05+.9*j/7)
  i=min(137,max(1,round(t*2)+1))
  f=frames/f'{i:04d}.jpg'
  if not f.exists():f=sorted(frames.glob('*.jpg'))[-1]
  im=Image.open(f);x=(j%4)*270;y=(j//4)*510;sheet.paste(im,(x,y));d.text((x+8,y+485),f'Cena {scene:02d} | {t:.2f}s',fill='white')
 sheet.save(p/f'review/motion-{scene:02d}.jpg',quality=90)
sha=hashlib.sha256(video.read_bytes()).hexdigest()
q=json.loads((p/'review/quality.json').read_text());q['render_sha256']=sha;q['render_file']='renders/beleza-01-tall-tale.mp4';(p/'review/quality.json').write_text(json.dumps(q,indent=2,ensure_ascii=False))
print('Motion sheets ready',sha)
