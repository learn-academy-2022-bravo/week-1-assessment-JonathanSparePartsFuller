// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer 5
// b) Verify and explain: .push adds a value to the end of the array and returns index


// --------------------1) What will this log?

const cohort = "LEARN 2022"
// console.log(cohort.length)

// a) Your answer: It will log the index of 10
// b) Verify and explain: .length counted the index of the string starting from 0


// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: It will log (o) from the string
// b) Verify and explain: This happend because it's looking for the character at the 4th index of the string


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: It will log Ruby
// b) Verify and explain: This happend because the log is looking for the string at the 1st index within the array, as apposed to the 1st character in the string.


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays[0].toUpperCase())

// a) Your answer: It will uppercase both strings.
// b) Verify and explain: My understanding was .toUpperCase would uppercase all strings, but in this case it only uppercased "saturday" and I'm not sure why.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer: Number
// b) Verify and explain I really don't know why
