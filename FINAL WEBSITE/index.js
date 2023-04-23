// Javascript code for navbar toggle 

// const toggleButton = document.getElementsByClassName('toggle-button')[0]
// const navbarLinks = document.getElementsByClassName('navbar-links')[0]

// toggleButton.addEventListener('click', () => {
//   navbarLinks.classList.toggle('active')
// })

const mobile_nav=document.querySelector(".mobile-navbar");
const nav_header=document.querySelector ("#header")
mobile_nav.addEventListener('click',()=>toggleNavbar());

const toggleNavbar=()=>{
  nav_header.classList.toggle('active');
}