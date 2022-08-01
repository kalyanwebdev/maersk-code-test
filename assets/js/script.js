import { arrayShuffle } from "./functions.js";

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


function renderCardTemplate(element) {
  document.getElementById("cards").innerHTML =
    document.getElementById("cards").innerHTML +
    '<div class="col-4"><div class="card" style="background-color:' +
    element.color +
    '">' +
    element.number +
    "</div></div>";
}

function sortAllCards() {
  console.log(cards);
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
