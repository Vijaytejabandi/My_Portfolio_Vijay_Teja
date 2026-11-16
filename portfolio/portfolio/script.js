// typing effect
const words=["responsive web apps","REST APIs","AI-powered tools","clean Java & Python code"];
const el=document.getElementById('typed');let w=0,c=0,del=false;
(function type(){
  const t=words[w];
  el.textContent=t.slice(0,c);
  if(!del&&c===t.length){del=true;return setTimeout(type,1400)}
  if(del&&c===0){del=false;w=(w+1)%words.length}
  c+=del?-1:1;setTimeout(type,del?35:70);
})();

// nav
const nav=document.getElementById('nav'),burger=document.getElementById('burger'),menu=document.getElementById('menu');
addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>20),{passive:true});
burger.onclick=()=>{const o=menu.classList.toggle('open');burger.classList.toggle('open',o);burger.setAttribute('aria-expanded',o)};
menu.querySelectorAll('a').forEach(a=>a.onclick=()=>{menu.classList.remove('open');burger.classList.remove('open')});

// scroll reveal + active link
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('show');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(s=>io.observe(s));
const links=[...menu.querySelectorAll('a')];
const so=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('on',l.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section[id]').forEach(s=>so.observe(s));

// lightbox
const lb=document.getElementById('lb'),lbImg=document.getElementById('lbImg'),lbCap=document.getElementById('lbCap');
document.querySelectorAll('.cert').forEach(b=>b.onclick=()=>{lbImg.src=b.dataset.img;lbImg.alt=b.dataset.title;lbCap.textContent=b.dataset.title;lb.hidden=false;document.body.style.overflow='hidden'});
const closeLb=()=>{lb.hidden=true;document.body.style.overflow=''};
lb.onclick=e=>{if(e.target!==lbImg)closeLb()};
addEventListener('keydown',e=>{if(e.key==='Escape')closeLb()});
document.getElementById('yr').textContent=new Date().getFullYear();
