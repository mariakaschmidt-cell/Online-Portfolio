const menuToggle = document.querySelector('.menu-toggle');
const sideMenu = document.querySelector('.side-menu');
const closeBtn = document.querySelector('.close-btn');

menuToggle.addEventListener('click', () => {
  sideMenu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  sideMenu.classList.remove('active');
});

// optional: Menü schließt sich, wenn man auf einen Link klickt
document.querySelectorAll('.menu-item').forEach(item => {
  item.addEventListener('click', () => {
    sideMenu.classList.remove('active');
  });
});
