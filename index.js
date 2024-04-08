const button = document.getElementById("button")
const label1 = document.getElementById("label1")
const label2 = document.getElementById("label2")
const label3 = document.getElementById("label3")
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

button.onclick = function() { // Add on click
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    label1.textContent = randomNum1;
    label2.textContent = randomNum2;
    label3.textContent = randomNum3;
    
}

// const min = 50;
// const max = 100;

// let randomNumber = Math.random(); // create a random number between 0 and 1 by default
// let randomNum = Math.floor(Math.random() * 6) + 1; // Roll a six sided dice, floor takes away decimals, +1 to remove the 0
// let randomNumba = Math.floor(Math.random() * (max - min)) + min; // Between 1 and 100

// console.log(randomNumber)
// console.log(randomNum)
// console.log(randomNumba)
