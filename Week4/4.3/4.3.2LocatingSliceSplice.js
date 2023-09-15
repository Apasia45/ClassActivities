const arr = ["a", "a", "b", "a", "c", "b", "a", "b", "b", "c", "c", "c"];

// find the first index of "a", "b", and "c"
const FirstA = arr.indexOf("a");
const FirstB = arr.indexOf("b");
const FirstC = arr.indexOf("c");

console.log(arr.indexOf("a"));
console.log(arr.indexOf("b"));
console.log(arr.indexOf("c"));
// find the last index of "a", "b", and "c"
const LastA = arr.lastIndexOf("a");
const LastB = arr.lastIndexOf("b");
const LastC = arr.lastIndexOf("c");

console.log(arr.lastIndexOf("a"));
console.log(arr.lastIndexOf("b"));
console.log(arr.lastIndexOf("c"));
// if the first index and last index of "a" is not the same, remove the last instance
// repeat until there is just one "a"

let multiAs = true;

while (multiAs) {
  let firstA = arr.indexOf("a");;
  let lastA = arr.lastIndexOf("a");

  multiAs = firstA !== lastA;

  if (multiAs) {
    arr.splice(lastA, 1);
  }

}
