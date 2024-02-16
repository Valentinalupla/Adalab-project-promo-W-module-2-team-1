//import variables from "../scss/core/variables.scss";


const palette1 = document.querySelector(".input1");
const palette2 = document.querySelector(".input2");
const palette3 = document.querySelector(".input3");

const toCollapseMenu = document.querySelector(".fieldset__design");
const upArrow = document.querySelector(".js-iconUp");
const downArrow = document.querySelector(".js-iconDown");

const cardIcon1 = document.querySelector(".imgIc1");
const cardIcon2 = document.querySelector(".imgIc2");
const cardIcon3 = document.querySelector(".imgIc3");
const cardIcon4 = document.querySelector(".imgIc4");




palette1.addEventListener("click", () => {
    setRadio();
    console.log("1");
    //cardIcon1.classList.remove("changereds");
    removeRed();
    removeNeutrals();
    changeIconsBlue();


});
palette2.addEventListener("click", () => {
    setRadio();
    removeBlue()
    removeNeutrals();
    changeIconsRed();

});
palette3.addEventListener("click", () => {
    setRadio();
    removeBlue()
    removeRed();
    changeIconsNeutrals();

    console.log("3");
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

    if (toCollapseMenu.classList.contains("collapsed")) {
        toCollapseMenu.classList.remove("collapsed");
        upArrow.classList.remove("collapsed");
        downArrow.classList.add("collapsed");

    } else {
        toCollapseMenu.classList.add("collapsed");
        upArrow.classList.add("collapsed");
        downArrow.classList.remove("collapsed");
    }



}

//probar a llamarlos con queryAll poniendo la msima clase para todos los elementos

/*var allFormOne = document.querySelectorAll('.form1');

allFormOne.forEach(element => {
  element.addEventListener('change', function(e) {
    console.log(`Ha cambiado el input ${e.target.id} \nTu sueldo se multiplicará por: ${e.target.value}`);

  });
});*/

const r = document.querySelector("._variables.scss");
console.log(r);