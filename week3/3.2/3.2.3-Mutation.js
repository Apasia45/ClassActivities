let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = null;
y = undefined;
z = false;

// print x, y, and z

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
// a = null;
// y = undefined;
// z = false;


// using BRACKET NOTATION, assign a value to b
b[0] = 100;
console.log(b);

// using DOT NOTATION, assign a PROPERTY to c
c.name = "jon";

// using DOT NOTATION, assign a METHOD to c
c.doSomething = () => console.log("yoooo");

console.log(c);

// using BRACKET NOTATION, call the method in c
c["doSomething"]();

// print a, b, and c
console.log(a, b, c);
