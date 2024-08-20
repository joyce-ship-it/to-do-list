console.log('Restaurant');
import "./styles.css";
import {home} from "./home.js";
import {menu} from "./menu.js";
import {about} from "./about.js";

const content = document.querySelector('#content');
const buttonArr = document.querySelectorAll('button');

buttonArr[0].classList.add('selected');
home(content);

function removeSelected(buttonArr){
    buttonArr.forEach(button => {
        if(button.classList.contains('selected')){
            button.classList.remove('selected');
        }
    });
}

buttonArr[0].addEventListener('click',(e)=>{
    removeSelected(buttonArr);
    e.target.classList.add('selected');

    content.textContent = "";
    home(content);
})

buttonArr[1].addEventListener('click', (e)=>{
    removeSelected(buttonArr);
    e.target.classList.add('selected');

    content.textContent = "";
    menu(content);
})

buttonArr[2].addEventListener('click', (e)=>{
    removeSelected(buttonArr);
    e.target.classList.add('selected');
    
    content.textContent = "";
    about(content);
})