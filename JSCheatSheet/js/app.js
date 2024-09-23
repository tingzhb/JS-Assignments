// INITIALIZING VARIABLES
// Variable that CANNOT be modified
const firstName = "Ben";
const lastName = "Ting";

// Variable that CAN be modified
let age = 30;
let isAwake = true;

// Modifying Variables
height = 175;
isAwake = false;
let yearOfBirth = 2024 - age;
console.log(yearOfBirth);
// firstName = "Jonathan"; Does not work because firstName is const.


// Using a Bool to control code flow
if (isAwake) {
  console.log("Awake!");
}
else {
  console.log("Asleep!")
}


// INITIALIZING FUNCTIONS:

// #1. Function with no inputs or outputs
function sayGoodMorning() {
  console.log("Good Morning!");
  console.log(age);
  age++;
}
// Calling Above Function
sayGoodMorning();


// #2. Function with no inputs and an output
function getBankBalance() {
  return 500 + 600;
}
// Calling Above Function
console.log(getBankBalance());



// #3. Function with input(s) and no output
function addOne(inputNumber) {
  inputNumber += 1;
  console.log(inputNumber)
}
// Calling Above Function
addOne(8);


// #4. Function with input(s) and an output
// Example Function A
function square(numberToSquare) {
  return numberToSquare * numberToSquare;
}
// Calling Example Function A
let squaredNumber = square(15);
console.log(squaredNumber);

console.log(square(15));

// Example Function B
function decide(isHungry) {
  if (isHungry) {
    return "Can I have food?";
  } else {
    return "Get back to work!"
  }
}
// Calling Example Function B
console.log(decide(false));
console.log(decide(true));

// LOOPS!!!

// GetRandomInt Function
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// Print 13 different random numbers between 1 and 6.
for (let i = 0; i < 13; i++) {
  // THINGS HAPPENING!
  console.log(getRandomInt(6) + 1);
}

// Start at 1, multiply the number of each iteration by 2 and stop after 1024.
for (let i = 1; i <= 1024; i *= 2) {
  console.log(i);
}

// Start at 10 and count down until 0. Print each number to the Console.
// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// Write a function that has 2 number as parameters and returns the
// first number to the power of the second number

// 2 to the power of 2 = 2 X 2
// 2 to the power of 3 = 2 X 2 X 2
// 2 to the power of 4 = 2 X 2 X 2 X 2

// function power(firstNumber, exponent) {
//   // Here we cache the result.
//   let result = firstNumber;
//   for (let i = 1; i < exponent; i++) {
//     // Here we multiply the result by the firstNumber (e.g. 8 * 2)
//     result *= firstNumber;
//   }
//   // Once the loop is over, we return the result.
//   return result;
// }
// console.log(power(4, 24));

// Output: 999 green bottles hanging on the wall. 999 green bottles hanging on the wall.
// Output: And if one green bottle, should accidentally fall, there will be 998 green bottles hanging on the wall.
// Output… Until 0 bottles are remaining.

// for (let i = 99; i >= 2 ; i--) {
//   console.log("There are " + i + " green bottles hanging on the wall. " + i + " green bottles hanging on the wall. And if one green bottle, should accidentally fall."
//   );
// }

// let studentNames = ["Olivia", "Ethan", "Isabella", "James", "Ava", "Liam", "Sophia", "Noah", "Emma", "Lucas"];
//
// studentNames[3] = "Michael";
// studentNames.push("Ben");
//
// console.log("We have " + studentNames.length + " students ");
//
// for (let i = 0; i < studentNames.length; i++) {
//   console.log("Good morning " + studentNames[i] + "!");
// }

// Roll 10 000 times for a number between 0 and 10 by using:
//  And count the number of times that you have rolled that specific number
// Afterwards, print the result to the console.

let randomNumberCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

// Use a FOR LOOP to WRITE into an ARRAY
for (let i = 0; i < 100000; i++) {
  let randomNumber = getRandomInt(10);
  randomNumberCount[randomNumber] += 1;
}

// User a FOR LOOP to READ a VALUE in an ARRAY.
for (let i = 0; i < randomNumberCount.length; i++) {
  console.log("I rolled " + i + " " + randomNumberCount[i] + " times.");
}



