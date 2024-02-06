/*
let js = "Amazing";

if (js === "Amazing") {
    alert("Js is so Amazing language to getting a job");
}

console.log(20 + 30 - 10);

// Value and Variables
console.log('Shohan');
console.log(2001 - 2024);

let fName = "Shohan";
lname = "Anika";
console.log(fName);
console.log(lname);

let myFirstJob = "SoftWare Engineer";
console.log(myFirstJob);

console.log(true);


// typeof to find the datatype in js
let javaScript = true;

console.log(javaScript);

javaScript = "yes!";
console.log(javaScript);

console.log(typeof javaScript);
// console.log(typeof 1285);
// console.log(typeof "shohan");
// console.log(typeof true);
// console.log(typeof 15.5);

let year;
console.log(year);
console.log(typeof year);

console.log(typeof null);

// let, const and var
let age = 23;
age = 24;
console.log(age);

const birthYear = 2001;
// birthYear = 1999; its contains error reason why its not reassigned variable
console.log(birthYear);

var job = "Software";
job = "eee";
console.log(job);


// Basic Operator
const now = 2024;
const ageShohan = now - 1999;
const ageAnika = now - 2002;
console.log(ageShohan, ageAnika);

console.log(ageShohan / 2, ageShohan * 2, 2 ** 3);
// 2**3 means exponential operator. means 2 to the power 3 = 2*2*2

// Concatanation
const fName = "Shohan";
const lName = "Anika";

console.log(fName + ' & ' + lName);

// Assognment Operator
let x = 10 + 5; //15
x += 5; // x=x+5 = 20
x *= 5; //x=x*5 = 100
x++; //x = x+1;
x--; //x = x-1
console.log(x);

// Comparison Operator >,<, >=, <=
console.log(ageShohan > ageAnika);
console.log(ageAnika >= 18);
console.log(ageShohan <= 18);

const isFullAge = ageAnika >= 18;
console.log(now - 1965 < now - 2025);



// operator Presedence
const now = 2062;
const ageAnika = now - 2002;
const ageShohan = now - 2001;
const husbandWife = ageShohan > ageAnika;
console.log("Shohan is bigger than Anika, Is It true? -> " + husbandWife);
console.log("Shohan can Marry anika, Is It Possible? -> " + husbandWife);
console.log("Shohan can Marry anika, Is It Possible? -> " + husbandWife);

//left ro right operation
console.log(25 - 10 - 5);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageShohan + ageAnika) / 2;
console.log(averageAge);
console.log(ageShohan, ageAnika);



// Strings and Template Literals
const fName = "Shohan";
const job = "Software Enginner";
const birthYear = 2001;
const currentYear = 2024;

const shohan = "I'm " + fName + ', a ' + (currentYear - birthYear) + ' years old ' + job + '!';
console.log(shohan);

// Regular Usage Template Literal
const shohanNew = `I'm ${fName} a ${currentYear - birthYear} year's old ${job}!`;
console.log(shohanNew);
console.log(`Just a regular string...`);

// Multiline string
console.log('String \n\ multiple \n\ Line');

// Backtext use korle same to same output dibe
console.log(`String
Multiple
Line
use
backtext`);

// Taking Decisions: if / else Statements
const age = 18;

if (age >= 18) {
    console.log('Shohan can start driving license');
}
else {
    const yearLeft = 18 - age;
    console.log(`Shohan is too young, Wait another ${yearLeft} years`);
}

const birthYear = 2001;
let century;

if (birthYear <= 2000) {
    century = 20;
}
else {
    century = 21;
}
console.log(century);

// Type Conversion
const inputYear = '2001';
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);
console.log(Number('Shohan'));
console.log(typeof NaN);

console.log(String(23));

// Type Coercion
console.log('I am ' + 23 + ' Years Old.');
console.log('23' - '10' - 3); // ans is 10
console.log('23' * '2'); // ans is 46
console.log('23' / '2'); // ans is 11.5
console.log('23' + '10' + 3); // ans is 23103

let n = '1' + 1;
n = n - 1;
console.log(n);


// Truthy and Falsy Values

//  javascript has 5 falsy values: 0, ‘’, undefined, null, NaN.
console.log(Boolean(0));
console.log(Boolean(''));
console.log(Boolean({}));
console.log(Boolean('Shohan'));
console.log(Boolean(undefined));

const money = 0;
if (money) {
    console.log(`Don't Spend it at all;`);
}
else {
    console.log('You Shound get a job!');
}

let height = 20;
if (height) {
    console.log('YAY! Height is Defined');
}
else {
    console.log('Height is Undefined');
}



// Equality Operators: == vs. ===

const age = '18';
if (age === 18) console.log('You just become an adult (Strict))');
if (age == 18) console.log('You just become an adult (loose)');

alert('I Love You');
const favourite = Number(prompt(`What's Your Favourite Number?`));
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) {
    console.log('23 is an amazing number!');
}
else if (favourite === 7) {
    console.log('7 is also a cool number');
}
else if (favourite === 9) {
    console.log('9 is also a cool number');
}
else {
    console.log('Number is not 23 or 7');
}

if (favourite !== 23) console.log('Why not 23?');


// Logical Operator:

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision); //false
console.log(hasDriverLicense || hasGoodVision); //true
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;
// if (shouldDrive) {
//     console.log('Sarah has able to drive!');
// }
// else {
//     console.log('Someone else should drive...');
// }

const isTired = false;
console.log(hasDriverLicense || hasGoodVision || isTired);

if (hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah is able to drive');
}
else {
    console.log('Someone else should drive...');
}*/

// The switch Statement

const day = 'Wednesday';

switch (day) {
    case 'Tuesday':
        console.log('Cover up try to done udemy section 3');
        break;
    case 'Wednesday':
        console.log('Go to versity');
        console.log('I guess i faces many problem like tiredness, but i do on the night running udemy try to vedio watch section 4');
        break;
    case 'Thusday':
        console.log('Cover section 4');
        break;
    case 'Friday':
        console.log('Cover section 5');
        break;
    case 'Saturday':
        console.log('cover section 6');
        break;
    case 'Sunday':
        console.log('cover section 7');
        break;
    case 'Monday':
        console.log('Cover section 8');
        break;
    default:
        console.log('Work need to more hard');
}

