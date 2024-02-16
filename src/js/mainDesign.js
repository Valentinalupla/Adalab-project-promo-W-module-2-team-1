


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
}
function changeIconsBlue() {
    cardIcon1.classList.add("changeblues");
    cardIcon2.classList.add("changeblues");
    cardIcon3.classList.add("changeblues");
    cardIcon4.classList.add("changeblues");
}
function changeIconsNeutrals() {
    cardIcon1.classList.add("changeneutrals");
    cardIcon2.classList.add("changeneutrals");
    cardIcon3.classList.add("changeneutrals");
    cardIcon4.classList.add("changeneutrals");
}
function removeRed() {
    cardIcon1.classList.remove("changereds");
    cardIcon2.classList.remove("changereds");
    cardIcon3.classList.remove("changereds");
    cardIcon4.classList.remove("changereds");

}
function removeBlue() {
    cardIcon1.classList.remove("changeblues");
    cardIcon2.classList.remove("changeblues");
    cardIcon3.classList.remove("changeblues");
    cardIcon4.classList.remove("changeblues");

}
function removeNeutrals() {
    cardIcon1.classList.remove("changeneutrals");
    cardIcon2.classList.remove("changeneutrals");
    cardIcon3.classList.remove("changeneutrals");
    cardIcon4.classList.remove("changeneutrals");

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





