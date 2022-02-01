
/* START COUNT WITH 1 */
let count = 1;
let container = document.querySelector('container');
const NavItems = document.querySelector('.navbar').children;
const navBar = document.querySelector('.navbar');




const sections = Array.from(document.getElementsByTagName("section"));
for(section of sections){
    newNavItem();
}

function newNavItem(){
    const navItem = document.createElement('li');
    navItem.setAttribute('class','Section_'+count);
    const navLink = document.createElement('a');
    navLink.textContent = "SECTION "+count;
    let ID = '#Section_'+count;
    navLink.setAttribute('href',ID);
    //THE SCROLL FUNCTIONALITY USING scrollIntoView()
    navLink.addEventListener('click',function(){
        let SECTION = document.querySelector(ID);
        SECTION.scrollIntoView(true);
        SECTION.classList.add("active");
        navLink.classList.add("active");
        for(section of sections){
            if(section.getAttribute('id') !== SECTION.getAttribute('id')){
                section.classList.remove("active");
            }
        }
        for(NavItem of NavItems){
            if(NavItem.getAttribute('class') !== section.getAttribute('class')){
                NavItem.classList.remove("active");
            }
        }


    });

    navItem.style.cssText = 'display:inline-block;padding:2em;';
    navLink.style.cssText = 'text-decoration:none;';
    navItem.appendChild(navLink);
    navBar.appendChild(navItem);
    count++;
}



/* function newSECTION(){
    const newDIV = document.createElement('section');
    newDIV.setAttribute('id','Section_'+count);
    newDIV.style.cssText = 'flex-basis: 60%;border:2px solid rgb(35, 50, 184);font-size: 28px;font-family: Forte;padding-top: 50px;margin-top: 5px;display: flex;flex-direction: column;align-items: center;justify-content: center;border-radius: 25px;padding-bottom: 30px;';
    newDIV.textContent = 
    `SECTION ${count} ADDED, AWESOME  
    CHANGE IT'S CONTENT AS YOU WANT`;
    container.appendChild(newDIV);
} */









/* const button = document.getElementById('BUTTON');
button.addEventListener('click',function(){
    newSECTION();
    newNavItem();

});
 */

    