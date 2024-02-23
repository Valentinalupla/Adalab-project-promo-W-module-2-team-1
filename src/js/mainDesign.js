"use strict"

const palettes = document.querySelectorAll(".inputpal");
const icNs = document.querySelectorAll(".js-icons");

const toCollapseMenu = document.querySelector(".fieldset__design");

const [upArrow, downArrow] = document.querySelectorAll(".js-iconUp, .js-iconDown");
const [cardDecor, cardtext] = document.querySelectorAll(".js-decorationCard, .js-headerCard");


upArrow.addEventListener("click", collapseDesign);
downArrow.addEventListener("click", collapseDesign);

changePalettes();

function changeColours(colAdd, colRem, colRem2, decAdd, decRem, decRem2) {
    icNs.forEach(icon => {

        icon.classList.add(colAdd);
        icon.classList.remove(colRem, colRem2);
    })
    cardDecor.classList.add(decAdd);
    cardDecor.classList.remove(decRem, decRem2);
    cardtext.classList.add(colAdd);
    cardtext.classList.remove(colRem, colRem2);

}

function collapseDesign() {

    upArrow.classList.toggle("collapsed");
    downArrow.classList.toggle("collapsed");
    toCollapseMenu.classList.toggle("collapsed");
}

function changePalettes() {

    palettes.forEach(element => {
        element.addEventListener('click', () => {
            if (element.value == "colours1") {

                changeColours("changeblues", "changereds", "changeneutrals", "decoB", "decoR", "decoN");

            } if (element.value == "colours2") {
                changeColours("changereds", "changeblues", "changeneutrals", "decoR", "decoB", "decoN");

            } if (element.value == "colours3") {
                changeColours("changeneutrals", "changereds", "changeblues", "decoN", "decoR", "decoB");

            }
        });
    });
}



