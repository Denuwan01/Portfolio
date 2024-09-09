let menuIcon = document.querySelector('menu-icon');
let navbar = document.querySelector('.navbar');

menuIcons.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active');
}