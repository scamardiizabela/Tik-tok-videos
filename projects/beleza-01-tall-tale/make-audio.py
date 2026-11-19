import numpy as np, wave
from pathlib import Path
p=Path(__file__).resolve().parent/'public/audio';sr=44100;duration=77.2
x=np.arange(int(sr*duration))/sr
music=np.zeros_like(x);fx=np.zeros_like(x)
# Original restrained marimba-like chord bed, no third-party audio.
for beat in np.arange(0,duration,.6):
 k=int(beat*sr);n=min(int(.8*sr),len(x)-k);t=np.arange(n)/sr
 chord=[(220,277.18,329.63),(196,246.94,293.66),(174.61,220,261.63),(196,246.94,329.63)][int(beat/4.8)%4]
 f=chord[int(beat/.6)%3]* (2 if int(beat/.6)%4==0 else 1)
 env=(1-np.exp(-t*120))*np.exp(-t*7)
 music[k:k+n]+=.12*env*(np.sin(2*np.pi*f*t)+.25*np.sin(2*np.pi*f*2*t))
for j,sec in enumerate([3.2,14,15.8,21.76,25.28,29.24,33.44,39.76,43.6,50.4,54.96,58.08,63.12,70.64,74.56]):
 k=int(sec*sr);n=int(.35*sr);t=np.arange(n)/sr
 env=(1-np.exp(-t*120))*np.exp(-t*17)
 sound=.12*env*np.sin(2*np.pi*(650+100*j%400)*t+2*np.sin(t*12))
 fx[k:k+n]+=sound[:len(fx[k:k+n])]
for name,a in [('music.wav',music),('effects.wav',fx)]:
 with wave.open(str(p/name),'w') as w:w.setnchannels(1);w.setsampwidth(2);w.setframerate(sr);w.writeframes((a*32767).astype('<i2').tobytes())
print('Original music and effects generated')
