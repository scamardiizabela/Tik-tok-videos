"""Original quiet score and scene chimes; no third-party samples."""
import math,struct,wave
rate=22050;duration=70
chimes=[0,9.25,12.13,21.41,33.62,47.88,55.13,61.89]
with wave.open('public/soundscape.wav','wb') as out:
 out.setnchannels(1);out.setsampwidth(2);out.setframerate(rate);buf=bytearray()
 for n in range(rate*duration):
  t=n/rate;chord=[(130.81,164.81,196),(110,130.81,164.81),(87.31,130.81,174.61),(98,146.83,196)][int(t/8)%4]
  v=sum(math.sin(2*math.pi*f*t)*.013 for f in chord)*(.7+.3*math.sin(math.pi*(t%8)/8)**2)
  for when in chimes:
   d=t-when
   if 0<=d<.75:v+=(math.sin(2*math.pi*784*d)+.4*math.sin(2*math.pi*1176*d))*.07*math.exp(-d*9)*min(1,d*100)
  v*=min(1,t/2,(duration-t)/2);buf.extend(struct.pack('<h',int(max(-1,min(1,v))*32767)))
 out.writeframes(buf)
