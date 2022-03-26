// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
//
// // Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// For me the first thing that comes to my head is to make a function for problem with conditionals.
//212 is my baseline for this problem and I have to find three solutions, so I'll be utilizing <, >, =.
// The return will utilize back-ticks(``) as it'll allow me to intersect my parameter into it.
// Then I'll repeat this same step slichtly changing it to fit the rest of the problems in this question.
// When I log these problems I am expecting to get back the results that are expected of me in the question.

// const temp1 = 42
// const temp2 = 350
// const temp3 = 212
//
// const boilingPoint = (currentTempt) => {
//   if(currentTempt < 212){
//     return `${currentTempt} is below boiling point`
//   }else if (currentTempt > 212){
//     return `${currentTempt} is above boiling point`
//   }else if (currentTempt = 212){
//     return `${currentTempt} is at boiling point`
//   }
// }
// console.log(boilingPoint(temp1)) 42 is below boiling point
// console.log(boilingPoint(temp2)) 350 is above boiling point
// console.log(boilingPoint(temp3)) 212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// For this problem I'm going to use the .conCat() to combine both variables, then use .length to find the final index
// I'll create a variable to group the first two variables together so I can utilize .concat()
// Then I'll console.log my own variable to get the concatanation of both variable.
// Lastly I'll .length the variable I created to receive an output of 10.

// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]
//
// const bothNums = myNumbers1.concat(myNumbers2)
// console.log(bothNums) [3,  7,  0, 36, -9, 8, -7, 42,  9, 13]
// console.log(bothNums.length) 10

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "1202 ovarB"

// For this one I'll be using the array mutator .reverse.
// All I have to do is console.log(currentCohort.reverse()) and I'll receive the output "1202 ovarB"

// const currentCohort = "Bravo 2022"
// console.log(currentCohort.reverse());

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"



const myArray = [13, 34, 5, 10, 27, 42]


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

const totalNums = (num1, num2) => {
  return 
}
