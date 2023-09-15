// create an Array using an Array literal
const myArray = ["do", "Dee","Da"];
// access the 1st item in the Array
const firstItem = [0];
// access the last item in the Array
const lastITem = [2];
// print the length of the Array
console.log(myArray.length);
// use the length property to access the last item in the Array
const lengthArray = myArray.length - 1;
// with for...of, loop over the Array, modify the value and add to a different Array
const newArray = [];
for (let item of myArray) {
  newArray.push(item + " got added");
}

console.log(newArray);
