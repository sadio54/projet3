
const btnMenu = document.querySelector('.logo-menu');
const menu = document.querySelector('.liste-nav');


btnMenu.addEventListener('click', () =>{
    menu.classList.toogle('active')
})


const allLinks =  document.querySelectorAll('.item-nav');

allLinks.forEach(item => {
    
    item.addEventListener('click', () => {
        menu.classList.toogle('active')
    })
    item.addEventListener('click', () => {
        menu.classList.toogle('active')
    })