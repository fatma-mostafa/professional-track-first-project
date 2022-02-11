
/* START COUNT WITH 1 */
let count = 1;
let container = document.querySelector('container');
const navBar = document.querySelector('.navbar');





const sections = Array.from(document.getElementsByTagName("section"));
for(section of sections){
    newNavItem();
}

function newNavItem(){
    const navItem = document.createElement('li');
    navItem.setAttribute('class','navItem');
    const navLink = document.createElement('a');
    navLink.textContent = "SECTION "+count;
    let ID = '#Section_'+count;
    navLink.setAttribute('href',ID);
    var navItems = navBar.getElementsByClassName("navItem");
    
    //THE SCROLL FUNCTIONALITY USING scrollIntoView()
    navLink.addEventListener('click',function(){
        var current = document.getElementsByClassName("active");
        if(current.length !== 0){
            current[0].className = current[0].className.replace(" active", "");
        } 
        this.className += " active"; 
        let SECTION = document.querySelector(ID);
        SECTION.scrollIntoView(true);


       
        
        
        
    });
    navItem.style.cssText = 'display:inline-block;padding:2em;';
    navLink.style.cssText = 'text-decoration:none;';
    navItem.appendChild(navLink);
    navBar.appendChild(navItem);
    count++;
}















    