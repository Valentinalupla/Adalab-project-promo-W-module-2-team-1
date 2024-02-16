


//const palette1 = document.querySelector(".input1");
//const palette2 = document.querySelector(".input2");
//const palette3 = document.querySelector(".input3");

const palettes = document.querySelectorAll(".inputpal");

const toCollapseMenu = document.querySelector(".fieldset__design");
const upArrow = document.querySelector(".js-iconUp");
const downArrow = document.querySelector(".js-iconDown");

const cardIcon1 = document.querySelector(".imgIc1");
const cardIcon2 = document.querySelector(".imgIc2");
const cardIcon3 = document.querySelector(".imgIc3");
const cardIcon4 = document.querySelector(".imgIc4");

const cardDecor = document.querySelector(".js-decorationCard");
const cardtext = document.querySelector(".js-headerCard");


palettes.forEach(element => {
    element.addEventListener('click', function (e) {
        if (element.value == "colours1") {

            removeRed();
            removeNeutrals();
            changeIconsBlue();


        } if (element.value == "colours2") {
            removeBlue()
            removeNeutrals();
            changeIconsRed();


        } if (element.value == "colours3") {

            removeBlue()
            removeRed();
            changeIconsNeutrals()

        }
    });
});


upArrow.addEventListener("click", () => {
    collapseDesign();
});
downArrow.addEventListener("click", () => {
    collapseDesign();

});

function changeIconsRed() {

    cardIcon1.classList.add("changereds");
    cardIcon2.classList.add("changereds");
    cardIcon3.classList.add("changereds");
    cardIcon4.classList.add("changereds");
    cardtext.classList.add("changereds");
    cardDecor.classList.add("decoR");

}
function changeIconsBlue() {
    cardIcon1.classList.add("changeblues");
    cardIcon2.classList.add("changeblues");
    cardIcon3.classList.add("changeblues");
    cardIcon4.classList.add("changeblues");
    cardtext.classList.add("changeblues");
    cardDecor.classList.add("decoB");
}
function changeIconsNeutrals() {
    cardIcon1.classList.add("changeneutrals");
    cardIcon2.classList.add("changeneutrals");
    cardIcon3.classList.add("changeneutrals");
    cardIcon4.classList.add("changeneutrals");
    cardtext.classList.add("changeneutrals");
    cardDecor.classList.add("decoN");
}
function removeRed() {
    cardIcon1.classList.remove("changereds");
    cardIcon2.classList.remove("changereds");
    cardIcon3.classList.remove("changereds");
    cardIcon4.classList.remove("changereds");
    cardtext.classList.remove("changereds");
    cardDecor.classList.remove("decoR");

}
function removeBlue() {
    cardIcon1.classList.remove("changeblues");
    cardIcon2.classList.remove("changeblues");
    cardIcon3.classList.remove("changeblues");
    cardIcon4.classList.remove("changeblues");
    cardtext.classList.remove("changeblues");
    cardDecor.classList.remove("decoB");

}
function removeNeutrals() {
    cardIcon1.classList.remove("changeneutrals");
    cardIcon2.classList.remove("changeneutrals");
    cardIcon3.classList.remove("changeneutrals");
    cardIcon4.classList.remove("changeneutrals");
    cardtext.classList.remove("changeneutrals");
    cardDecor.classList.remove("decoN");

}
function setRadio() {

    const selectedOption = event.currentTarget;
    selectedOption.classList.toggle("palette--selected");

}
function collapseDesign() {

    upArrow.classList.toggle("collapsed");
    downArrow.classList.toggle("collapsed");
    toCollapseMenu.classList.toggle("collapsed");
}





