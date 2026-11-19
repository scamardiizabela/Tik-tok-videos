# Componentes didáticos

`Didactic({scene,t,frame})`: `t` é tempo local da cena em segundos, `frame` opcional. SVG 1080×1920, zona didática principal x390–970 / y420–1200. Personagem pode ocupar x70–350, chão y1210. Legendas usar y1400. Entrada ease-out dura 0,7 s. Evitar cortes com duração inferior a 1 s.

Cenas: 0 hook/potes; 1 três funções; 2 hidratação/água; 3 glicerina; 4 nutrição/atrito; 5 dose; 6 proteína; 7 temporário e pontas; 8 sobreposição; 9 modo de uso; 10 CTA. Também aceita aliases textuais hook/helpers/hydration/glycerin/nutrition/dose/protein/temporary/overlap/instructions/cta.

`Environment({scene,t})`: t pode ser global para parallax contínuo. Cenários `public/env-0.png` a `env-5.png`, seis famílias, mais luz atmosférica, partículas, piso perspectivo e plantas no primeiro plano. Verificar framing das imagens geradas; imagens precisam ser backgrounds sem texto/pessoas. Todas as peças didáticas são código original reutilizável. Representações do fio e ingredientes são esquemáticas, sem escala e sem prova de eficácia.
