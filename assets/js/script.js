import { arrayShuffle } from "./functions.js";

window.addEventListener('resize',()=>{
  location.reload();
});

let cards = [
  { number: 1, color: "#6f98a8" },
  { number: 2, color: "#2b8ead" },
  { number: 3, color: "#2f454e" },
  { number: 4, color: "#2b8ead" },
  { number: 5, color: "#2f454e" },
  { number: 6, color: "#bfbfbf" },
  { number: 7, color: "#bfbfbf" },
  { number: 8, color: "#6f98a8" },
  { number: 9, color: "#2f454e" },
];

let borderWidth = "0.6rem";

function renderCardTemplate(element) {
  let cssProp = (document.body.clientWidth > 959)? "background-color:"+element.color : "border-left: "+borderWidth+" solid "+element.color;
  document.getElementById("cards").innerHTML =
    document.getElementById("cards").innerHTML +
    '<div class="col-4" style="'+cssProp+'"><div class="card">' +
    element.number +
    "</div></div>";
}

function sortAllCards() {
  let sorted = cards.sort((a, b) => a.number > b.number ? 1 : -1);
  sorted.forEach((element, index) => {
    renderCardTemplate(element);
  });
}

function clearAllCards() {
  document.getElementById("cards").innerHTML = "";
}

function shuffleCardsBtnClick() {
  clearAllCards();
  arrayShuffle(cards).forEach((element, index) => {
    renderCardTemplate(element);
  });
}

function sortCardsBtnClick() {
  clearAllCards();
  sortAllCards();
}

sortAllCards();

document
  .getElementById("shuffle-btn")
  .addEventListener("click", shuffleCardsBtnClick, false);
document
  .getElementById("sort-btn")
  .addEventListener("click", sortCardsBtnClick, false);
