import("/js/mainDesign.js");
import("/js/main_complete.js");
import("/js/mainSectionImage.js");
import("/js/share.js");


//flechas
const arrowUP = document.querySelectorAll(".js-arrow-up");
const arrowDown = document.querySelectorAll(".js-arrow-down");
const leyend = document.querySelectorAll('.js-leyends');

const toCollapseMenu = document.querySelectorAll('.js-collapsedArea');

console.log(toCollapseMenu[0]);

function collapseMenu () {
   
    toCollapseMenu.forEach(menu => {
        
        menu.classList.toggle('collapsed');
     });
     arrowUP.forEach(up => {
        up.classList.toggle('collapsed');
       
     });
     arrowDown.forEach(down => {
        down.classList.toggle('collapsed');
    
     });
    
}

// leyend[0]


// leyend.forEach(section => {
//     section.addEventListener('click', collapseMenu);
    
// })
