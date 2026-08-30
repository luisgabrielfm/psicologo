const toggle=document.querySelector('.menu-toggle'),nav=document.querySelector('.nav');
toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',open)});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

document.querySelectorAll('.accordion article button').forEach(button=>button.addEventListener('click',()=>{const item=button.parentElement;const wasOpen=item.classList.contains('open');document.querySelectorAll('.accordion article').forEach(el=>{el.classList.remove('open');el.querySelector('button').setAttribute('aria-expanded','false');el.querySelector('button span').textContent='+'});if(!wasOpen){item.classList.add('open');button.setAttribute('aria-expanded','true');button.querySelector('span').textContent='−'}}));

let slide=0;const track=document.querySelector('.testimonial-track'),slides=track.children.length;function showSlide(){track.style.transform=`translateX(-${slide*100}%)`}document.querySelector('.next').addEventListener('click',()=>{slide=(slide+1)%slides;showSlide()});document.querySelector('.prev').addEventListener('click',()=>{slide=(slide-1+slides)%slides;showSlide()});
