const year=document.getElementById('year');
if(year){year.textContent=new Date().getFullYear();}

const button=document.getElementById('installButton');
if(button){
  button.addEventListener('click',()=>{
    alert('SlowDay Store Rescue is preparing for launch in the Shopify App Store. The 14-day trial will be available from the Shopify plan selection flow after approval.');
  });
}

const menu=document.querySelector('.menu');
const nav=document.querySelector('.header nav');
if(menu&&nav){
  menu.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    menu.setAttribute('aria-expanded',String(open));
  });
}
