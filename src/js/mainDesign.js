

const palettes = document.querySelectorAll(".inputpal");
const icNs = document.querySelectorAll(".js-icons");

const toCollapseMenu = document.querySelector(".fieldset__design");
const upArrow = document.querySelector(".js-iconUp");
const downArrow = document.querySelector(".js-iconDown");

const cardDecor = document.querySelector(".js-decorationCard");
const cardtext = document.querySelector(".js-headerCard");


palettes.forEach(element => {
    element.addEventListener('click', function (e) {
        if (element.value == "colours1") {

            changeIconsBlue();

        } if (element.value == "colours2") {
            changeIconsRed();

        } if (element.value == "colours3") {

            changeIconsNeutrals();
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
    icNs.forEach(icon => {

        icon.classList.add("changereds");
        icon.classList.remove("changeblues", "changeneutrals");
    })
    cardDecor.classList.add("decoR");
    cardDecor.classList.remove("decoB", "decoN");
    cardtext.classList.add("changereds");
    cardtext.classList.remove("changeblues", "changeneutrals");

}
function changeIconsBlue() {
    icNs.forEach(icon => {

        icon.classList.add("changeblues");
        icon.classList.remove("changereds", "changeneutrals");
    })
    cardDecor.classList.add("decoB");
    cardDecor.classList.remove("decoR", "decoN");
    cardtext.classList.add("changeblues");
    cardtext.classList.remove("changereds", "changeneutrals");

}
function changeIconsNeutrals() {

    icNs.forEach(icon => {

        icon.classList.add("changeneutrals");
        icon.classList.remove("changereds", "changeblues");
    })
    cardDecor.classList.add("decoN");
    cardDecor.classList.remove("decoR", "decoB");
    cardtext.classList.add("changeneutrals");
    cardtext.classList.remove("changeblues", "changereds");
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





