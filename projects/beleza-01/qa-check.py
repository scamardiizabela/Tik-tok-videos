import json,subprocess,os
from PIL import Image,ImageDraw
p='beleza-01-hidratacao-nutricao-reconstrucao.mp4'
os.makedirs('qa/sampled',exist_ok=True)
subprocess.run(['ffmpeg','-v','error','-i',p,'-vf','fps=2,scale=180:320','qa/sampled/%03d.jpg'],check=True)
files=sorted(os.listdir('qa/sampled'))
for page in range((len(files)+34)//35):
 sheet=Image.new('RGB',(900,2380),'#132d35');d=ImageDraw.Draw(sheet)
 for k,name in enumerate(files[page*35:(page+1)*35]):
  x=k%5*180;y=k//5*340
  sheet.paste(Image.open('qa/sampled/'+name),(x,y));d.text((x+6,y+322),f'{(page*35+k)*.5:.1f}s',fill='white')
 sheet.save(f'qa/contact-{page+1}.jpg')
w=json.load(open('words.json'))
assert all(x['start']<x['end'] for x in w)
assert all(a['end']<=b['start']+.001 for a,b in zip(w,w[1:]))
print('All',len(files),'sampled frames; timing order OK;',len(w),'acoustically aligned words')
