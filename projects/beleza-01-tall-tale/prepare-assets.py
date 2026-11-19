from PIL import Image
from pathlib import Path
import json
import numpy as np
root=Path(__file__).resolve().parents[2]
pub=Path(__file__).resolve().parent/'public'
(pub/'character').mkdir(parents=True,exist_ok=True)
im=Image.open(root/'assets/characters/protagonista-a/atlas-v1.png')
names=['head-neutral','head-curious','head-surprised','head-happy','torso','arm-left','forearm-left','arm-right','forearm-right','thigh-left','shin-left','thigh-right','shin-right','hair-strand','scarf-tail','reference']
manifest={}
for i,name in enumerate(names):
 x,y=i%4,i//4
 # Atlas is square, generator follows regular 4x4 grid. Trim transparent margins inside each cell.
 crop=im.crop((round(x*im.width/4),round(y*im.height/4),round((x+1)*im.width/4),round((y+1)*im.height/4)))
 bbox=crop.getchannel('A').getbbox()
 if bbox: crop=crop.crop(bbox)
 a=np.array(crop);r,g,b,alpha=[a[:,:,q] for q in range(4)];bad=((r>170)&(g<90)&((b<130)|(b>150)))|(alpha<40);a[bad,3]=0;crop=Image.fromarray(a)
 crop.save(pub/'character'/f'{name}.png')
 manifest[name]={'cell':[x,y],'size':crop.size,'source':'atlas-v1.png'}
(pub/'character'/'parts.json').write_text(json.dumps(manifest,indent=2))
for source,prefix,target in [('environment-atlas-v1.png','env',root/'assets/environments/beleza-01'),('foreground-atlas-v1.png','fg',root/'assets/environments/beleza-01')]:
 path=target/source
 if not path.exists():continue
 a=Image.open(path)
 for i in range(6):
  x,y=i%3,i//3
  crop=a.crop((round(x*a.width/3),round(y*a.height/2),round((x+1)*a.width/3),round((y+1)*a.height/2)))
  crop.save(pub/f'{prefix}-{i}.png')
for i,name in enumerate(['vanity','hydration','nutrition','reconstruction','selection','sunset']):
 path=root/'assets/environments/beleza-01'/f'{i:02d}-{name}-v1.png'
 if path.exists():
  import shutil
  shutil.copy(path,pub/f'env-{i}.png')
print('Assets prepared')
