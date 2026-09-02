const year = document.getElementById('year');

if (year) {
  year.textContent = new Date().getFullYear();
}

const menu = document.querySelector('.menu');
const nav = document.querySelector('.header nav');

if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', String(open));
  });
}
