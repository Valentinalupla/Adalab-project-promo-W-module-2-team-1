
const palettes = document.querySelectorAll(".inputpal");
const icNs = document.querySelectorAll(".js-icons");

// const toCollapseMenu = document.querySelector(".fieldset__design");
// const upArrow = document.querySelector(".js-iconUp");
// const downArrow = document.querySelector(".js-iconDown");

const cardDecor = document.querySelector(".js-decorationCard");
const cardtext = document.querySelector(".js-headerCard");

const redColour = "changereds";
const blueColour = "changeblues";
const neutColour = "changeneutrals";

const redColourdec = "decoR";
const blueColourdec = "decoB";
const neutColourdec = "decoN";

palettes.forEach(element => {
    element.addEventListener('click', function (e) {
        if (element.value == "colours1") {

            changeColours(blueColour, redColour, neutColour, blueColourdec, redColourdec, neutColourdec);

        } if (element.value == "colours2") {
            changeColours(redColour, blueColour, neutColour, redColourdec, blueColourdec, neutColourdec);

        } if (element.value == "colours3") {
            changeColours(neutColour, redColour, blueColour, neutColourdec, redColourdec, blueColourdec);

        }
    });
});


// upArrow.addEventListener("click", collapseDesign);
// downArrow.addEventListener("click", collapseDesign);

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

// function collapseDesign() {

//     upArrow.classList.toggle("collapsed");
//     downArrow.classList.toggle("collapsed");
//     toCollapseMenu.classList.toggle("collapsed");
// }





