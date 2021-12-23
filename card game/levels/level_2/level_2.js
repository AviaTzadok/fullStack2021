let level2Musical_Instruments = [
  { name: "classic_guitar", img: "Musical_Instruments_img/3428498.jpg" },
  { name: "classic_guitar", img: "Musical_Instruments_img/3428498.jpg" },
  { name: "xylophone", img: "Musical_Instruments_img/6637619.jpg" },
  { name: "xylophone", img: "Musical_Instruments_img/6637619.jpg" },
  { name: "Drums", img: "Musical_Instruments_img/6332012.jpg" },
  { name: "Drums", img: "Musical_Instruments_img/6332012.jpg" },
  { name: "Cymbals", img: "Musical_Instruments_img/3927581.jpg" },
  { name: "Cymbals", img: "Musical_Instruments_img/3927581.jpg" },
  { name: "flute", img: "Musical_Instruments_img/221563.jpg" },
  { name: "flute", img: "Musical_Instruments_img/221563.jpg" },
  { name: "Flute", img: "Musical_Instruments_img/8678157.jpg" },
  { name: "Flute", img: "Musical_Instruments_img/8678157.jpg" },
  { name: "trumpet", img: "Musical_Instruments_img/164936.jpg" },
  { name: "trumpet", img: "Musical_Instruments_img/164936.jpg" },
  { name: "Electric_Guitar", img: "Musical_Instruments_img/2156327.jpg" },
  { name: "Electric_Guitar", img: "Musical_Instruments_img/2156327.jpg" },
  { name: "oud", img: "Musical_Instruments_img/2257558.jpg" },
  { name: "oud", img: "Musical_Instruments_img/2257558.jpg" },
  { name: "harp", img: "Musical_Instruments_img/8519628.jpg" },
  { name: "harp", img: "Musical_Instruments_img/8519628.jpg" },
  { name: "Violin", img: "Musical_Instruments_img/7097776.jpg" },
  { name: "Violin", img: "Musical_Instruments_img/7097776.jpg" },
  { name: "Grand_piano", img: "Musical_Instruments_img/6902921.jpg" },
  { name: "Grand_piano", img: "Musical_Instruments_img/6902921.jpg" },
];

let scoreBoard = document.querySelector(".scoreBoard");
let clickBoard = document.querySelector(".clickBoard");

let grid = document.querySelector(".grid");

let audio = document.querySelector("audio");
let source = document.querySelector("#source");

let popup = document.querySelector(".popup");
let playAgain = document.querySelector(".playAgain");

let imgs;
let cardsId = [];
let cardsSelected = [];
let cardsWon = 0;
let clicks = 0;
document.addEventListener("DOMContentLoaded", function () {
  createBoard(grid, level2Musical_Instruments);
  arrangeCard();
  playAgain.addEventListener("click", replay);

  // debugger;
  imgs = document.querySelectorAll("img"); //imgs=all images node list
  Array.from(imgs).forEach((img) => img.addEventListener("click", flipCard));
});

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

function arrangeCard() {
  shuffle(level2Musical_Instruments);
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

function flipCard() {
  if (cardsSelected.length < 2) {
    let selected = this.dataset.id;
    let clicked = level2Musical_Instruments[selected].name;

    cardsId.push(selected); //id
    cardsSelected.push(clicked); //name

    this.classList.add("flip");
    this.setAttribute("src", level2Musical_Instruments[selected].img);
  }
  if (cardsId.length === 2) {
    setTimeout(checkForMatch, 1000);
  }
}

function checkForMatch() {
  let imgs = document.querySelectorAll("img");
  let firstCard = cardsId[0];
  let secondCard = cardsId[1];
  if (cardsSelected[0] === cardsSelected[1] && firstCard !== secondCard) {
    // setTimeout(1000);
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
  if (cardsWon == level2Musical_Instruments.length / 2) {
    alert("You won");
    setTimeout(() => (popup.style.display = "flex"), 500);
  }
}

function replay() {
  arrangeCard();
  grid.innerHTML = "";
  createBoard(grid, level2Musical_Instruments);
  cardsWon = 0;
  clicks = 0;
  clickBoard.innerHTML = 0;
  scoreBoard.innerHTML = 0;
  popup.style.display = "none";
}
