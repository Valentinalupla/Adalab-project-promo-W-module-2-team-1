import("/js/mainDesign.js");
import("/js/main_complete.js");
import("/js/mainSectionImage.js");
import("/js/share.js");

//flechas
const arrowUP = document.querySelectorAll(".js-arrow-up");
const arrowDown = document.querySelectorAll(".js-arrow-down");
const leyend = document.querySelectorAll('.js-leyends');
const toCollapseMenu = document.querySelectorAll('.js-collapsedArea');


leyend.forEach(section => {
   section.addEventListener('click', handleCollapsables)
})

//Para que funcione esto hay que modificar todo el html 
function handleCollapsables(event) {
   const clickedHeader = event.currentTarget;
   const clickedSection = (clickedHeader.nextSibling).nextSibling;

   const clickedArrowUp = (clickedHeader.childNodes[1]).childNodes[3];
   const clickedArrowDown = (clickedHeader.childNodes[1]).childNodes[5];

   console.log((clickedHeader.childNodes[1]).childNodes[3]);

   arrowUP.forEach(arrow => {

      if (arrow === clickedArrowUp) {
         arrow.classList.remove("collapsed");
      }
   })
   arrowDown.forEach(arrow => {

      if (arrow === clickedArrowDown) {
         arrow.classList.add("collapsed");
      }
   })

   toCollapseMenu.forEach(menu => {

      if (menu === clickedSection) {
         menu.classList.remove("collapsed")

      } else {
         menu.classList.add("collapsed")
      }
   })

}