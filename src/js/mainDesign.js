const palette1 = document.querySelector(".input1");
const palette2 = document.querySelector(".input2");
const palette3 = document.querySelector(".input3");
const toCollapseMenu = document.querySelector(".fieldset__design");
const upArrow = document.querySelector(".js-iconUp");
const downArrow = document.querySelector(".js-iconDown");



palette1.addEventListener("click", () => {
    setRadio();
    console.log("1");

});
palette2.addEventListener("click", () => {
    setRadio();
    console.log("2");
});
palette3.addEventListener("click", () => {
    setRadio();
    console.log("3");
});

upArrow.addEventListener("click", () => {
    collapseDesign();
});
downArrow.addEventListener("click", () => {
    collapseDesign();

});
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
