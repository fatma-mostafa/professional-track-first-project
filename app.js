/* DECLARE COUNT VARIABLE TO BE INCREASED FOR EVERY NEW SECTION ADDED
let count = 5;*/
let container = document.querySelector('container');
container.style.width = window.innerWidth + "vw";
container.style.height = window.innerHeight + "vw";


const GMAIL=document.querySelector('#GMAIL');
const Img = GMAIL.children[0];
Img.style.cssText = 'width:70px;height:60px;';
GMAIL.children[1].style.cssText ='font-family:Monotype Corsiva;font-size: 48px;';

const WHATS = document.querySelector('#WHATS');
WHATS.children[0].style.cssText = 'width:70px;height:70px;';
WHATS.children[1].style.cssText = 'font-family:Forte;font-size: 48px;';

document.querySelector('#LOCATION').children[1].style.cssText = 'font-family:Forte;font-size: 48px;';
const NavItems = document.querySelector('.NavBar').children;

/* START COUNT WITH 1 */
let count = 1;
const navBar = document.querySelector('.NavBar');



function newNavItem(){
    const navItem = document.createElement('li');
    const navLink = document.createElement('a');
    navLink.textContent = "SECTION "+count;
    navLink.setAttribute('href','#Section_'+count);
    navItem.style.cssText = 'display:inline;padding:2em;';
    navLink.style.cssText = 'text-decoration:none;';
    navItem.appendChild(navLink);
    navBar.appendChild(navItem);
    count++;
}

function newSECTION(){
    const newDIV = document.createElement('div');
    newDIV.setAttribute('id','Section_'+count);
    newDIV.style.cssText = 'border:2px solid rgb(35, 50, 184);font-size: 28px;font-family: Forte;padding-top: 50px;margin-top: 5px;display: flex;flex-direction: column;align-items: center;justify-content: center;border-radius: 25px;padding-bottom: 30px;';
    newDIV.textContent = 
    `SECTION ${count} ADDED, AWESOME  
    CHANGE IT'S CONTENT AS YOU WANT`;
    container.appendChild(newDIV);
}

/* NAVIGATION MENU CREATION DYNAMICALLY WITH 4 BASIC SECTIONS */
for(let i=0;i<4;i++){
    newNavItem();
}




const button = document.getElementById('BUTTON');
button.addEventListener('click',function(){
    newSECTION();
    newNavItem();

});
