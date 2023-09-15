// Array Activity 1
// Create an Array called students that contains the names of 5 students
const students = ["Spencer", "Alexander", "Kolebe", "Gerald", "Marshall"];
// Use bracket notation to access and print the name of the 4th student in the list, then print the name of the student in index 2
console.log(students[3]);
console.log(students[2]);
// Loop over the Array to print out each name
for (let student of students) {
  console.log(student);
}
// Array Activity 2
// Create a variable called roster and assign it the value of the string below
// "These are the students in the list: "
let roster = "These are the students in the list: ";
// Loop over the Array again, but this time each iteration of the loop should add the value to the end of the roster string AND a blank space
// After the loop, print roster
for (let student of students) {
  roster += `${student} `;
}
console.log(roster);
// The expected output should look like this:
// "These are the students in the list: name1 name2 name3 name4 name5"
//----------------------------------------------------------------------------------------------
// Function Activity 1
// Declare a function called testAverage
//  These are the requirements of the function:
//    Accepts a single parameter that can accept an infinite amount of arguments
//    Inside the function, add the parameters together
//    Divide the sum by the number of parameters that were passed in
//    The function will output the result
// Hints: Remember how a rest parameter represents arguments and what methods that can allow us to use
function testAverage(...scores) {
  // We need a variable set to 0 in order to accurately add the current value of the iteration to what the current sum of scores is
  // We also need to save the sum to a variable so we can reference that value in the return statement
  let total = 0;
  for (let score of scores) {
    total += score;
    // If it helps, uncomment the console.log below if you want to see what total is at the end of each iteration
    // console.log(total);
  }
  return total / scores.length;
}
// Invoke testAverage with the following parameters: 92, 71, 85, 83
testAverage(92, 71, 85, 83);
// Function Activity 2
// NOTE: This function really just contains conditionals. The real purpose of Activity 2 is to practice using the returned value of a function as the argument to another function
// Declare a function called gradeCheck
//  These are the requirements of the function:
//    Accepts a single parameter (we will be passing the returned value of our testAverage function)
//    Inside the function, build the following conditionals:
//    if argument is greater than or equal to 90, print "Your grade is an A, great job!" then output false
//    if argument is greater than or equal to 80 but less than 90, print "Your grade is B, nice job!" then output false
//    if argument is greater than or equal to 70, print "Your grade is a C, extra studying required" then output true
//    if argument is less than 70, print "Uh oh." then output true
function gradeCheck(grade) {
  if (grade >= 90) {
    console.log(`${grade} is an A, great job!`);
    return false;
  }
  if (grade >= 80) {
    console.log(`${grade} is a B, nice job!`);
    return false;
  }
  if (grade >= 70) {
    console.log(`${grade} is a C, extra studying required.`);
    return true;
  }
  if (grade < 70) {
    console.log(`${grade}. Uh oh.`);
    return true;
  }
}
// Invoke gradeCheck and pass in testAverage as an argument; testAverage should have the same parameters as before
// NOTE: There are a couple of ways to do this. You could invoke testAverage() inside the argument of gradeCheck:
gradeCheck(testAverage(92, 71, 85, 83)); // 82.75 is a B, nice job!
// Or you could create a variable and assign it to the returned value of testAverage()
let avg = testAverage(92, 71, 85, 83);
gradeCheck(avg);
// Now invoke gradeCheck, but pass in testAverage as an argument that has different parameters
gradeCheck(testAverage(52, 71, 55, 44)); // 55.5. Uh oh.
//--------------------------------------------------------------------------------------------------
// Object Activity 1
// Below is an object called currentWeather
const currentWeather = {
  weather: "Rain",
  temp: 50,
  sky: "Overcast",
  details: ["Moderate Rain", 45, "Not Severe"]
};
// Print a string that references weather, temp and sky
console.log(
  `Currently, it is ${currentWeather.temp}, the sky is ${currentWeather.sky} with some ${currentWeather.weather}`
);
// Create a variable called weatherDetails and assign it to the string below
let weatherDetails = "These are the weather details: ";
// Using a for...of loop, iterate through the array stored in "details". Each iteration of the loop should concatenate the value of the item AND a blank space to the end of the "weatherDetails" string.
// After the for...of loop, print out "weatherDetails"
for (let detail of currentWeather.details) {
  weatherDetails += `${detail} `;
}
console.log(weatherDetails);
// The exact output for this should be as shown bellow
// These are the weather details: Moderate Rain 45 Not Severe
// Object Activity 2
// Create an object called 'movie' that has 3 properties
// These keys will be "title", "genre", "yearReleased"
// Each key should have a relevant value
const movie = {
  title: "The Dark Knight",
  genre: "Action",
  yearReleased: 2008
};
// Iterate over the movie object to print the key AND value of each property
for (let key in movie) {
  console.log(`Key is: ${key} and value is: ${movie[key]}`);
}
