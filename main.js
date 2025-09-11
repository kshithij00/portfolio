document.addEventListener('DOMContentLoaded', function () {
  const y = new Date().getFullYear();
  ['year','year2','year3','year4'].forEach(id=>{
    const el = document.getElementById(id);
    if(el) el.textContent = y;
  });

  const menu = document.getElementById('mainNav');
  const btn = document.getElementById('menuToggle');

  if(btn && menu){
    btn.addEventListener('click', ()=>{
      menu.classList.toggle('open');
    });
  }

  const links = document.querySelectorAll('.nav-link');
  links.forEach(a=>{
    const href = a.getAttribute('href');
    if(window.location.pathname.endsWith(href) || (href === 'index.html' && window.location.pathname.endsWith('/'))){
      a.classList.add('active');
    }
  });
});
