
const palettes = document.querySelectorAll(".inputpal");
const icNs = document.querySelectorAll(".js-icons");

const cardDecor = document.querySelector(".js-decorationCard");
const cardtext = document.querySelector(".js-headerCard");

palettes.forEach(element => {
    element.addEventListener('click', () => {

        switch (element.value) {
            case "colours1":
                changeColours("changeblues", "changereds", "changeneutrals", "decoB", "decoR", "decoN");
                break;
            case "colours2":
                changeColours("changereds", "changeblues", "changeneutrals", "decoR", "decoB", "decoN");
                break;
            case "colours3":
                changeColours("changeneutrals", "changereds", "changeblues", "decoN", "decoR", "decoB");
                break;
        }
    });
});

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





