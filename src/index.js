import '/src/style.css';
import homePage from './home';
import about from './about';
import menu from './menu';

const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const menuBtn = document.querySelector(".menu");

homeBtn.addEventListener("click", ()=> {
    homePage();
});
menuBtn.addEventListener("click", ()=>{
    menu();
});

aboutBtn.addEventListener("click", ()=> {
    about();
});


homePage();