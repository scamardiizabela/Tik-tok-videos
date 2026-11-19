from pathlib import Path
from PIL import Image
import json, subprocess
p=Path(__file__).resolve().parent
words=json.loads((p/'words.json').read_text())
assert all(w['start']>=0 and w['end']>w['start'] for w in words)
assert all(a['start']<=b['start'] for a,b in zip(words,words[1:]))
duration=float(subprocess.check_output(['ffprobe','-v','error','-show_entries','format=duration','-of','csv=p=0',str(p/'public/audio/narration.mp3')]))
assert words[-1]['end']<=duration+.1
for name in ['env','fg']:
 for i in range(6):
  img=Image.open(p/'public'/f'{name}-{i}.png');assert min(img.size)>200
  if name=='fg':assert img.mode=='RGBA' and img.getchannel('A').getextrema()[0]==0
for part in ['head-neutral','head-curious','head-surprised','head-happy','torso','arm-left','arm-right','forearm-left','forearm-right','thigh-left','thigh-right','shin-left','shin-right']:
 im=Image.open(p/'public/character'/f'{part}.png');assert im.getchannel('A').getbbox()
result={'word_count':len(words),'voice_duration':duration,'composition_duration':68.8,'dimensions':[1080,1920],'fps':30,'checks':['timings monotonic and inside audio','all backgrounds present','foreground alpha present','rig pieces nonempty'],'limits':['technical checks do not certify perceptual quality or word alignment by listening']}
(p/'review/technical-check.json').write_text(json.dumps(result,indent=2))
print(json.dumps(result,indent=2))
