"""Keep acoustic Whisper timings; restore punctuation from the existing narration."""
import json,re,unicodedata,difflib
raw=json.load(open('words.raw.json'))
expected=open('narration.txt').read().split()
def norm(s):return re.sub(r'[^a-z0-9]','',unicodedata.normalize('NFKD',s.lower()).encode('ascii','ignore').decode())
a=[norm(x['text']) for x in raw];b=[norm(x) for x in expected]
out=[]; changes=[]
for tag,i,j,k,l in difflib.SequenceMatcher(None,a,b,autojunk=False).get_opcodes():
 if tag=='equal' or (tag=='replace' and j-i==l-k):
  for r,text in zip(raw[i:j],expected[k:l]):out.append({**r,'text':text})
  if tag!='equal':changes.append({'recognized':a[i:j],'script':b[k:l],'start':raw[i]['start']})
 elif tag=='replace' and l-k==1:
  out.append({'start':raw[i]['start'],'end':raw[j-1]['end'],'text':expected[k],'probability':min(w['probability'] for w in raw[i:j])})
  changes.append({'recognized':a[i:j],'script':b[k:l],'start':raw[i]['start'],'repair':'merged acoustic tokens'})
 elif tag=='delete' and a[i:j]==['e'] and raw[i]['start']==4.62:
  changes.append({'recognized':['e'],'script':[],'start':4.62,'repair':'spurious conjunction between category names'})
 else:raise RuntimeError(f'Manual alignment required: {tag} {raw[i:j]} {expected[k:l]}')
json.dump(out,open('words.json','w'),ensure_ascii=False,indent=2)
json.dump(changes,open('qa/transcript-corrections.json','w'),ensure_ascii=False,indent=2)
chunks=[];chunk=[]
for word in out:
 if chunk and (len(chunk)==3 or word['start']-chunk[-1]['end']>.3):chunks.append(chunk);chunk=[]
 chunk.append(word)
 if re.search(r'[.!?:]$',word['text']):chunks.append(chunk);chunk=[]
if chunk:chunks.append(chunk)
json.dump([{'start':g[0]['start'],'end':g[-1]['end'],'text':' '.join(w['text'] for w in g),'words':g} for g in chunks],open('captions-word.json','w'),ensure_ascii=False,indent=2)
print('WORDS',len(out),'CHUNKS',len(chunks),'CORRECTIONS',changes)
