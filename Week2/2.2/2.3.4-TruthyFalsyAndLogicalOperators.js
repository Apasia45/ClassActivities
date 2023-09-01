// Logical Operators
// what do you expect each line to print?
console.log(true && false); //false
console.log(true || false); //true
console.log(!true); //false
console.log(!(true && false)); //false
console.log(false || !false); //true

// Logical Operators and Truthy/Falsy
// ? what do you expect each line to print?
console.log(undefined || null); //undefined
console.log(!``); //undefined
console.log(!(1 && "false")); //true
console.log(NaN || !"true"); //true

// Set the age variable below equal to a number,
// then use conditional operators to construct an expression that returns...
// "full menu" if the age is over 10,
// and "kids menu" if the age is less than 10

let age = 24;
if (age > 10
 ) console.log("full menu");
else if (age < 10) {
 console.log("Kids menu");
}

// Using only logical operators (no comparison operators),
// write an if statement that prints...
//  "The number is zero" when num is 0.

let num = 0;
if (age === 0)
console.log("the number is zero");
else console.log("boop bop");
// Write your if statement here *
