/* 
    Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.


let massMark, heightMark, massJohn, heightJohn;
massMark = 95;
heightMark = 1.88;
massJohn = 85;
heightJohn = 1.76;

let BMIMark = massMark / (heightMark * heightMark);
console.log(BMIMark);

let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);*/


const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);

/* Write your code below. Good luck! 🙂 */

if (BMIMark > BMIJohn) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's(${BMIJohn})!`);
}
else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}


// Personal
/* 
alert('I Love You Anika');
const favourite = prompt('How to Anika Marry You??');
if (favourite == 'job') {
    console.log('Its 50-50 chance, If apu trust you then confirm you get apu. :D');
}
else if (favourite == 'only love') {
    console.log('No, its so tough. when you get job then she also make good feel about you then You can get Anika');
}
else {
    console.log('Hard Work Pays off. \n\ Shohan You Love Anika. \n\ Confirm She feel Your Emotion.:D');
}*/