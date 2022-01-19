//Q1

let str = "applE, BanaNa, Kiwi, AvOCado, CheRry, FiGs, LeMon, GrapEs";
let strsplit = str.toLowerCase().split(", ");

/*Go to the first letter in the first word,
and make it a capital letter, 
we will replace the first letter in that word
and return to our array the corrected word to the current position*/
for (let i = 0; i < strsplit.length; i++) {
  strsplit[i] = strsplit[i].charAt(0).toUpperCase() + strsplit[i].substring(1);
  console.log(`${strsplit[i]}|${strsplit[i].length}`);
}

//
console.log(`



`);

//Q2

let str1 = "Avia Tzadok";
let cont_true_guess = 0;
let cont = 0;
while (cont <= 3) {
  let guess = prompt("Guess char");
  let upper_char_guess = guess.toUpperCase();
  let lower_char_guess = guess.toLowerCase();
  if (guess.length !== 1) {
    continue;
  } else {
    if (str1.includes(upper_char_guess) || str1.includes(lower_char_guess)) {
      cont_true_guess++;
    }
  }
  cont++;
}
console.log(`You managed to guess ${cont_true_guess}/4 chars from my string`);

console.log(`



`);

//Q3

for (let i = 1; i <= 10; i++) {
  let to_str = "";
  for (let j = 1; j <= 10; j++) {
    let temp_str = String(i * j);
    if (temp_str.length > 1) {
      to_str += temp_str + "   ";
    } else {
      to_str += temp_str + "    ";
    }
  }
  console.log(to_str);
}

console.log(`



`);

//Q3 Bonus

for (let i = 1; i <= 100; i++) {
  let to_str = "";
  for (let j = 1; j <= 10; j++) {
    let temp_str = String(j * i);
    if (temp_str.length == 1) {
      to_str += temp_str + "     ";
    } else if (temp_str.length == 2) {
      to_str += temp_str + "    ";
    } else {
      to_str += temp_str + "   ";
    }
  }
  console.log(to_str);
}

console.log(`


`);

//Q3 Bonus op2
for (let f = 0; f < 4; f++) {
  for (let i = 1; i <= 10; i++) {
    let to_str = "";
    for (let j = 1 + f * 25; j <= 25 + f * 25; j++) {
      let temp_str = String(i * j);
      if (temp_str.length == 1) {
        to_str += temp_str + "     ";
      } else if (temp_str.length == 2) {
        to_str += temp_str + "    ";
      } else {
        to_str += temp_str + "   ";
      }
    }
    console.log(to_str);
  }
  console.log(`


`);
}

console.log(`



`);

//Q4

for (let i = 1; i <= 10; i++) {
  let to_str = "";
  for (let j = 1; j <= 10; j++) {
    let temp_str = String(i * j);
    if (!temp_str.includes("8")) {
      if (temp_str.length == 1) {
        to_str += temp_str + "      ";
      } else {
        to_str += temp_str + "     ";
      }
    } else {
      to_str += "boom" + "   ";
    }
  }
  console.log(to_str);
}

console.log(`



`);
