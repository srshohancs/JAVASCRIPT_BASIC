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
*


    // Function Declarations


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


//  Functions Calling Other Functions
const calAges = function (year) {
    return 2024 - year;
}

const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calAges(birthYear);
    const retirement = 59 - age;

    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement}`);
        return retirement;
    }
    else {
        console.log(`${firstName} already retired`);
        return -1;
    }
}
console.log(yearsUntilRetirement(2001, 'shohan'));
console.log(yearsUntilRetirement(1920, 'Anika'));
*/

// Introduction to Arrays
const name1 = 'Shohan';
const name2 = 'Anika';

const allNames = ['Shohan', 'Anika', 'Rahman'];
console.log(allNames);

const year = new Array(1999, 2000, 2023, 2024);
console.log(year);

const birthYear = [2000, 2001];
console.log(birthYear);

console.log(allNames[1]);
console.log(year[2]);

// How many elements in the array
console.log(allNames.length);

// Last element to findout like that size 3 (3-1)=2. 2is the index name
console.log(allNames[allNames.length - 1]);

// Replaced the elements
allNames[2] = 'Anika';
console.log(allNames);

allNames[1] = 'Love';
console.log(allNames);

// Array uses multiple
const firstName = 'Shohan';
const shohan = [firstName, 'Rahman', 2024 - 2001, 'student', allNames];
console.log(shohan);
console.log(shohan.length);

// Use function with array work
const calcAge = function (birthYear) {
    return 2024 - birthYear;
}
const years = [1999, 2001, 2005];
console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3); //ans 25, 23, 19

// Same work doing another method
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);