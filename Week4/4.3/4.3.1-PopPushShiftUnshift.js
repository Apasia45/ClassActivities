const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let SecondLast = nums.pop(5)
let Last = nums.pop(6)
// remove each of the first two items with shift(), saving each item to a variable
let firstItem = nums.shift(0);
let SecondItem = nums.shift(1);
// use push and unshift to add the variables back to the array in numerical order, 0-6
nums.push(SecondItem);
nums.push(firstItem);

nums.unshift(Last);
nums.unshift(SecondLast);

console.log(nums);



