//  Activating Strict Mode

'use strict';

/*
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can Drive :D');

// const private = 'asa';


// Functions

function logger() {
    console.log('My name is Shohan');
}
// calling / running / invoking
logger();
logger();
logger();

function fruitProcessor(apples, oranges) { //input peramter 2ta, input data of the function
    console.log(apples, oranges);
    const juice = `Juice with ${apples} Apples and ${oranges} Oranges.`;
    return juice;
}
const appleJuice = fruitProcessor(5, 7); //argument called this perameter
console.log(appleJuice);
console.log(fruitProcessor(7, 10));

const appleOrangeJuice = fruitProcessor(20, 50);
console.log(appleOrangeJuice);
*/


// Function Declarations

/*
function calcAge1(birthYear) {
    const age = 2024 - birthYear;
    return age;
}
const s = calcAge1(2001);
console.log(s);

// Function Declaretion
function calcAge1(birthYear) {
    return 2024 - birthYear;
}
const age1 = calcAge1(2001);
console.log(age1);

// Function Expressions
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}
const age2 = calcAge2(1999);
console.log(age2);
*/

// Fuction Expression
const calcAge2 = function (birthYear) {
    return 2024 - birthYear;
}

// Arrow Functions (One LIne function)
const calAge3 = birthYear => 2024 - birthYear;
const age3 = calAge3(2001);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 59 - age;
    // return retirement;
    return `${firstName} retires in ${retirement} year's`;
}
// console.log(yearsUntilRetirement(2001));
console.log(yearsUntilRetirement(1999, 'Shohan'));
console.log(yearsUntilRetirement(2002, 'Anika'));


//  Functions Calling Other Functions
// function cutFruitPiece(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const applePiece = cutFruitPiece(apples);
//     const orangePiece = cutFruitPiece(oranges);

//     const juice = `juice with ${applePiece} piece of Apples and ${orangePiece} piece of Oranges.`;
//     return juice;
// }
// console.log(fruitProcessor(5, 7));

function cutFruitPiece(fruit) {
    return fruit * 4;
}

function fruitProcessor(mangos, oranges) {
    const mangoPiece = cutFruitPiece(mangos);
    const orangePiece = cutFruitPiece(oranges);

    const juice = `juice with ${mangoPiece} piece of mangoes and ${orangePiece} piece of oranges`;
    return juice;
}
console.log(fruitProcessor(1, 5));