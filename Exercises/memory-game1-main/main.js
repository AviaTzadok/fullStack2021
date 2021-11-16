const cards = [
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
  { name: "F" },
  { name: "G" },
  { name: "H" },
  { name: "I" },
  { name: "J" },
  { name: "K" },
  { name: "L" },
  { name: "A" },
  { name: "B" },
  { name: "C" },
  { name: "D" },
  { name: "E" },
  { name: "F" },
  { name: "G" },
  { name: "H" },
  { name: "I" },
  { name: "J" },
  { name: "K" },
  { name: "L" },
];

function randRange(a, b) {
  return Math.floor(a + Math.random() * (b - a));
}

function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function shuffle(arr) {
  for (let i = 0; i < 100; i++) {
    let a1 = randRange(0, arr.length);
    let a2 = randRange(0, arr.length);
    if (a1 == a2) {
      i--;
      continue;
    }
    swap(arr, a1, a2);
  }
}

let check = (arr, i, j) => i != j && arr[i].name === arr[j].name;

function createCardElement(card) {
  const board = document.getElementById("board");
  const cardEl = document.createElement("div");
  cardEl.innerHTML = card.name;
  cardEl.className = "card";
  board.appendChild(cardEl);
}

function main() {
  for (let card of cards) {
    createCardElement(card);
  }
}

main();
