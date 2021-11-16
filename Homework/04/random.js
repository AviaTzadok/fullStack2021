let amountNamber = Number(prompt('Enter amount'));
let min = Number(prompt('Enter a minimum number'));
let max = Number(prompt('Enter a maximum number'));

for (let i = 0; i < amountNamber; i++) {
    console.log(Math.round(Math.random() * (max - min) + min))
}