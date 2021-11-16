// //q1

// let conter = 0;
// let num = 0;
// while (conter <= 9) {
//     if (num != 5) {
//         console.log(`number ${num}`)
//     }
//     conter++
//     num++
// }


// //q2

// let conter = 0;
// while (conter <= 10) {
//     console.log(`number ${conter}`)
//     conter += 2;
// }


// //q3

// let conter = 1;
// while (conter <= 78) {
//     console.log(`number ${conter}`)
//     conter += 7;
// }


// //q4

let conter = 0;
let num = 0;
while (num < 300) {
    num = conter * 3;
    console.log(`number ${num}`)
    conter++
}




// //q5

// let numberOfRows = prompt("Enter number");
// let conter_out_line = 0;
// let conter_in_line = 0;

// while (numberOfRows > conter_out_line) {
//     conter_in_line = conter_out_line;
//     while (conter_in_line >= 0) {
//         console.log("*")
//         conter_in_line--;
//     }
//     console.log("\n")
//     conter_out_line++
// }


// //q6

// let num = prompt("Enter number");
// while (num.length != 3) {
//     num = prompt("Please enter another number");
// }



// //q7 בדף נפרד

// q8

// let num1 = prompt('הכנס מספר ראשון');
// let num2 = prompt('הכנס מספר שני');
// let sum1 = 0;
// let sum2 = 0;

// while (num1 != 0 && num2 != 0) {

//     let fnum = Number(num1)
//     let snum = Number(num2)
//     sum2 = fnum + snum;
//     console.log(sum2)
//     if (sum2 < sum1) {
//         console.log('Smaller')
//     }
//     sum1 = sum2
//     num1 = prompt('הכנס מספר ראשון');
//     num2 = prompt('הכנס מספר שני');
// }




// //q9

// let garment = prompt('Enter a garment price');
// let amount = 0;
// while (garment != 0) {
//     let _garment = Number(garment);
//     amount += _garment;
//     garment = prompt('Enter a garment price');
// }

// if (amount <= 100) {
//     console.log(`The purchase price ${amount}`)
// } else if (amount > 100 && amount <= 250) {
//     console.log(`The purchase price ${amount-(amount*0.2)}`)
// } else if (amount > 250 && amount <= 400) {
//     console.log(`The purchase price ${amount-(amount*0.4)}`)
// } else {
//     console.log(`The purchase price ${amount-(amount*0.4)-50}`)
// }







// //q10

// let sum_volume = 32;
// let sum_weight = 10000;


// let p_volume = prompt('Enter package volume per meter');
// let p_weight = prompt('Enter a package weight per kilo');

// while (sum_volume - p_volume >= 0 && sum_weight - p_weight >= 0) {
//     sum_volume -= p_volume;
//     sum_weight -= p_weight;

//     p_volume = prompt('Enter package volume per meter');
//     p_weight = prompt('Enter a package weight per kilo');

// }
// console.log(`The truck is full, There is more left ${sum_volume} volume, and ${sum_weight} kilo`);