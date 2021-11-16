// // q1
// let first_num;
// let second_num;
// first_num = prompt("Enter number");
// second_num = prompt("Enter number");
// console.log(first_num * second_num);

// //q2
// let age;
// let first_name;
// first_name = prompt("Enter your first name");
// age = prompt("Enter your age");
// console.log(first_name + " is " + age + " years");

// //q3
// let birth;
// let your_age;
// birth = prompt("Enter year of birth");
// date_of_the_day = new Date();
// date_of_year = date_of_the_day.getFullYear();
// your_age = date_of_year - birth;
// console.log("your age is" + " " + your_age);

// //q4 homework01
// let time;
// time = prompt("What's the next round hour?");

// if (time >= 1 && time <= 6) {
//     console.log("Good night");
// } else if (time >= 7 && time <= 12) {
//     console.log("Good morning");
// } else if (time >= 13 && time <= 18) {
//     console.log("Good afternoon");
// } else if (time >= 19 && time <= 23 || time == 00) {
//     console.log("Good evening");
// } else console.log("Please enter a round hour");

// //q5
// let lucky_number = 36;
// let your_guess;

// your_guess = prompt("What's is your lucky number?");
// if (your_guess == lucky_number) {
//     console.log("Congratulations, you won the prize")
// } else {
//     console.log("You did not win, maybe next time")
// }

// //q6
// let your_mood;
// your_mood = prompt("What is your mood from one to ten?");

// if (your_mood == 1) {
//     console.log("😪");
// } else if (your_mood == 2) {
//     console.log("😥");
// } else if (your_mood == 3) {
//     console.log("☹️");
// } else if (your_mood == 4) {
//     console.log("😕");
// } else if (your_mood == 5) {
//     console.log("😄");
// } else if (your_mood == 6) {
//     console.log("😁");
// } else if (your_mood == 7) {
//     console.log("😆");
// } else if (your_mood == 8) {
//     console.log("😅");
// } else if (your_mood == 9) {
//     console.log("😂");
// } else if (your_mood == 10) {
//     console.log("🤣");
// } else {
//     alert("The number is not between one and ten,Please refresh the page again");
// }

// //q6
// let q1;
// let test_score = 1;
// q1 = prompt("Is the continent of Australia the largest continent?");

// if (q1 == "no") {
//     console.log("correct answer");
//     test_score = test_score + 33
// } else {
//     console.log("wrong answer");
// }

// let q2;
// q2 = prompt("Does a dog eat meat?");

// if (q2 == "no") {
//     console.log("wrong answer");
// } else {
//     console.log("correct answer");
//     test_score = test_score + 33
// }

// let q3;
// q3 = prompt("Is Mount Everest the highest in the world above sea level?");

// if (q3 == "no") {
//     console.log("wrong answer");
// } else {
//     console.log("correct answer");
//     test_score = test_score + 33
// }

// console.log("Your score " + test_score);

// //q7
// let num1;
// let num2;

// num1 = prompt("Enter a number");
// num2 = prompt("Enter another number");

// if (num1 == num2) {
//     console.log("You have written the same thing twice");
// } else {
//     console.log("These are two different things");
// }

// //q8
// let num1;
// let num2;

// num1 = prompt("Enter a number");
// num2 = prompt("Enter another number");

// if (num1 != num2) {
//     console.log("These are two different things");
// } else {
//     console.log("You have written the same thing twice");
// }

// //q9
// let num = 1;
// if (num != 1) {
//     console.log("I am NOT 1");
// } else {
//     console.log("I am 1");
// }

// //q10
// let foo = true;
// if (foo == false) {
//     console.log("I am false");
// } else {
//     console.log("I am true");
// }

// //q11
// let foo = false;
// if (foo != true) {
//     console.log("I am false")
// } else {
//     console.log("I am true");
// }

// //q12
// let foo = 5;
// if (foo < 5) {
//     console.log("I am lesser than to 5");

// } else if (foo > 5) {
//     console.log("I am greater than 5");

// } else {
//     console.log("I am Equal to 5");

// }

// //q13
// let bar = 100;
// if (bar <= 100) {
//     console.log("I am 100 or lesser than 100");
// } else {
//     console.log("I am greater than 100");
// }

// //q14
// if (15 > 20)

// //15
//     if (20 < 15)

//     //q16
//         let num = 7;
// if (num % 2 == 0) {
//     console.log("I am even");
// } else {
//     console.log("I am odd");
// }

// //q17
// let num = 7;
// let your_num;
// your_num = prompt("Enter number");
// if (num > your_num) {
//     console.log("your number lesser than my number");
// } else if (num < your_num) {
//     console.log("your number greater than my number");
// } else {
//     console.log("your number equle to my number");

// }
// console.log("סיימתי את הבדיקה");


// //q18
// let num1;
// let num2;
// let num3;
// let the_biggest_num;
// num1 = prompt("Enter the first number");
// num2 = prompt("Enter the second number");
// num3 = prompt("Enter third number");

// if (num1 > num2) {
//     the_biggest_num = num1;
//     if (num3 > num1) {
//         the_biggest_num = num3;
//     }
// } else if (num2 > num3) {
//     the_biggest_num = num2;
// } else {
//     the_biggest_num = num3;
// }
// console.log(the_biggest_num + " Is the largest number");

// //q19
// let _name;
// let password;
// _name = prompt("Who's there?");
// if (_name == "") {
//     console.log("canceled");
// } else if (_name == "Admin") {
//     password = prompt("Password?");
//     if (password == "") {
//         console.log("canceled");
//     } else if (password == "TheMaster") {
//         console.log("Welcome!");
//     } else {
//         console.log("Wrong password");
//     }

// } else {
//     console.log("I don't know you");
// }

// //q20

// let cost;
// let bill;
// let tip;
// cost = prompt("How much did the meal cost");
// cost = cost * 1; //converting to number from string
// if (cost >= 50 && cost <= 200) {
//     tip = cost * 0.15;
//     bill = cost + tip;
//     console.log(bill);
//     console.log(tip);

// } else {
//     tip = cost * 0.2;
//     bill = cost + tip;
// }
// console.log("The bill was " + cost + ", the tip was " + tip + " and the total bill " + bill);

// //21
// let color;
// color = prompt("What color the traffic light shows");
// if (color == "Red") {
//     console.log("Stop");
// } else if (color == "Yellow") {
//     console.log("Slow Down");
// } else {
//     console.log("Drive");
// }