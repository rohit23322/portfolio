const L=document.getElementById('lap'),C=document.getElementById('ct'),rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
let tgt=0,cur=0,total=5*700,mx=0;
const max=()=>document.documentElement.scrollHeight-innerHeight;
const sc=()=>{tgt=Math.min(1,Math.max(0,scrollY/max()))};
addEventListener('scroll',sc);sc();
addEventListener('pointermove',e=>{mx=e.clientX/innerWidth-.5});
document.querySelectorAll('nav button').forEach(b=>b.onclick=()=>scrollTo({top:b.dataset.p*max(),behavior:rm?'auto':'smooth'}));
function fr(){
 cur+=(tgt-cur)*(rm?1:.07);
 const s=Math.min(innerWidth/1200*1.12,1.25),k=Math.sin(cur*Math.PI*5);
 const rx=48-cur*14-Math.abs(k)*4, rz=-10+cur*10+k*3+mx*4, ty=-(cur*total);
 L.style.transform=`translate(-50%,-30%) scale(${s}) rotateX(${rx}deg) rotateZ(${rz}deg)`;
 C.style.transform=`translateY(${ty}px)`;
 requestAnimationFrame(fr)}
fr();
const hl=document.getElementById('hl'),ph=['Backend<br>Developer','Scalable<br>APIs','Python<br>Engineer'];let i=0;
if(!rm)setInterval(()=>{i=(i+1)%3;hl.style.opacity=0;setTimeout(()=>{hl.innerHTML=ph[i];hl.style.opacity=1},450)},3200);
document.getElementById('send').onclick=()=>{const n=fn.value,m=fm.value,e=fe.value;location.href='mailto:KHOMANEROHIT66@GMAIL.COM?subject='+encodeURIComponent('Portfolio message from '+n)+'&body='+encodeURIComponent(m+'\n\n'+n+' '+e)};