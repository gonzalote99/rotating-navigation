const open = document.getElementById('open');
const close = document.getElementById('close');
const container = document.querySelector('.container');


const closeMenu = document.querySelectorAll('nav ul li');


open.addEventListener('click', () => container.classList.add('show-nav'))



close.addEventListener('click', () => container.classList.remove('show-nav'))


closeMenu.forEach(element => {
  element.addEventListener('click', () => 
    container.classList.remove('show-nav')
  )
})