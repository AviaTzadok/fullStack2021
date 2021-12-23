let level1Animals = [
  { name: "butterfly", img: "Animals_img/1321524.jpg" },
  { name: "butterfly", img: "Animals_img/1321524.jpg" },
  // { name: "sheep", img: "Animals_img/1368521.jpg" },
  // { name: "sheep", img: "Animals_img/1368521.jpg" },
  // { name: "monkey", img: "Animals_img/3493730.jpg" },
  // { name: "monkey", img: "Animals_img/3493730.jpg" },
  // { name: "horse", img: "Animals_img/2313396.jpg" },
  // { name: "horse", img: "Animals_img/2313396.jpg" },
  // { name: "fox", img: "Animals_img/4934920.jpg" },
  // { name: "fox", img: "Animals_img/4934920.jpg" },
  // { name: "Hedgehog", img: "Animals_img/2923830.jpg" },
  // { name: "Hedgehog", img: "Animals_img/2923830.jpg" },
  // { name: "dolphin", img: "Animals_img/4886378.jpg" },
  // { name: "dolphin", img: "Animals_img/4886378.jpg" },
  // { name: "tiger", img: "Animals_img/162203.jpg" },
  // { name: "tiger", img: "Animals_img/162203.jpg" },
];

// .disable=true משבית את האפשרות ללחוץ על קלף נוסף
//define variables and get DOM element

let grid = document.querySelector(".grid");
let audio = document.querySelector("audio");
let source = document.querySelector("#source");
let scoreBoard = document.querySelector(".scoreBoard");
let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");
let clickBoard = document.querySelector(".clickBoard");
let hover = document.querySelector("#b_c");
let container = document.querySelector(".container");
// win.style.visibility = "hidden";

let imgs;
let cardsId = [];
let cardsSelected = [];
let cardsWon = 0;
let clicks = 0;
document.addEventListener("DOMContentLoaded", function () {
  //define functions

  createBoard(grid, level1Animals);
  arrangeCard();
  playAgain.addEventListener("click", replay);

  //add a click functions for images

  imgs = document.querySelectorAll("img");
  Array.from(imgs).forEach((img) => img.addEventListener("click", flipCard));
});
//createBoard function

function createBoard(grid, array) {
  popup.style.display = "none";
  array.forEach((arr, index) => {
    let img = document.createElement("img");
    img.setAttribute("src", "general_img/background_card.jpg");
    img.setAttribute("data-id", index);
    img.setAttribute("id", "b_c");

    grid.appendChild(img);
  });
}
// arrangeCard function

function arrangeCard() {
  shuffle(level1Animals);
}

function shuffle(arr) {
  for (i = 0; i < 100; i++) {
    let a1 = random(0, arr.length);
    let a2 = random(0, arr.length);
    if (a1 == a2) {
      i--;
      continue;
    }
    swap(arr, a1, a2);
  }
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function random(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}

// flip Card function

function flipCard() {
  if (cardsSelected.length < 2) {
    let selected = this.dataset.id;
    let clicked = level1Animals[selected].name;
    cardsSelected.push(clicked);

    cardsId.push(selected);
    this.classList.add("flip");
    this.setAttribute("src", level1Animals[selected].img);
    // document.querySelectorAll("img").disable = true;
  }
  if (cardsId.length === 2) {
    setTimeout(checkForMatch, 1500);
  }
}
// checkForMatch function

function checkForMatch() {
  // document.querySelectorAll("img").disable = true;
  let imgs = document.querySelectorAll("img");
  let firstCard = cardsId[0];
  let secondCard = cardsId[1];
  if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) {
    imgs[firstCard].setAttribute(
      "src",
      "https://www.animatedimages.org/data/media/180/animated-monkey-image-0231.gif"
    );
    imgs[secondCard].setAttribute(
      "src",
      "https://www.animatedimages.org/data/media/180/animated-monkey-image-0231.gif"
    );
    source.src = "sound/monkey.wav";
    audio.load();
    audio.play();

    cardsWon += 1;
    scoreBoard.innerHTML = cardsWon;
    setTimeout(checkWon, 200);
  } else {
    imgs[firstCard].setAttribute("src", "general_img/background_card.jpg");
    imgs[secondCard].setAttribute("src", "general_img/background_card.jpg");
    source.src = "sound/lose.wav";
    audio.load();
    audio.play();
    imgs[firstCard].classList.remove("flip");
    imgs[secondCard].classList.remove("flip");
  }
  cardsSelected = [];
  cardsId = [];
  clicks += 1;
  clickBoard.innerHTML = clicks;
}

function checkWon() {
  if (cardsWon == level1Animals.length / 2) {
    // win.style.visibility = "visible";
    container.style.opacity = 0.2;
    // alert("You won");
    // setTimeout(() => (popup.style.display = "flex"), 500);
  }
}
// The replay function

function replay() {
  arrangeCard();
  grid.innerHTML = "";
  createBoard(grid, level1Animals);
  cardsWon = 0;
  clicks = 0;
  clickBoard.innerHTML = 0;
  scoreBoard.innerHTML = 0;
  popup.style.display = "none";
}
