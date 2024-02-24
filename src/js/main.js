import("/js/mainDesign.js");
import("/js/main_complete.js");
import("/js/mainSectionImage.js");
import("/js/share.js");

//flechas
const arrowUP = document.querySelectorAll(".js-arrow-up");
const arrowDown = document.querySelectorAll(".js-arrow-down");
const leyend = document.querySelectorAll('.js-leyends');
const toCollapseMenu = document.querySelectorAll('.js-collapsedArea');


//función con parámetros para cada [] de los Arrays
function toggleSections(sec1, sec2, sec3) {

   toCollapseMenu[sec1].classList.toggle("collapsed");
   arrowUP[sec1].classList.toggle("collapsed");
   arrowDown[sec1].classList.toggle("collapsed");

   toCollapseMenu[sec2].classList.add("collapsed");
   toCollapseMenu[sec3].classList.add("collapsed");
}

//forEach con cada una de las leyendas que distingue mediante su posisción en el array [] y aplica 
//la función toggleSections con los respectivos parámetros para ocultar las demás secciones.

leyend.forEach(section => {
   section.addEventListener('click', () => {

      switch (section) {
         case leyend[0]:
            toggleSections(0, 1, 2); //realiza toggle de [0] y oculta [1] y [2]
            break;
         case leyend[1]:
            toggleSections(1, 0, 2);
            break;
         case leyend[2]:
            toggleSections(2, 0, 1);
            break;
      }
   })
})
