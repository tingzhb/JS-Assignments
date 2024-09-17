// INITIALIZING VARIABLES
// Variable that CANNOT be modified
const firstName = "Ben";
const lastName = "Ting";

// Variable that CAN be modified
let age = 30;
let isAwake = true;

// INITIALIZING FUNCTIONS
// Function with no inputs or outputs
function sayGoodMorning() {
  console.log("Good Morning!");
  console.log(age);
  age++;
}

// Function with no inputs and an output
function getBankBalance() {
  return 500 + 600;
}

// Calling
console.log(getBankBalance());

// Function with input(s) and no output
function addOne(inputNumber) {
  inputNumber += 1;
  console.log(inputNumber)
}

// Calling

addOne(8);

// Function with input(s) and an output
// Coding Format
function nameOfFunction(nameOfInput) {
  process;
  return result;
}
// Calling Format
nameOfFunction(3);

// Example 1
function square(numberToSquare) {
  return numberToSquare * numberToSquare;
}

// Calling Example 1
let squaredNumber = square(15);
console.log(squaredNumber);

console.log(square(15));

// RUNNING
// Modifying Variables
height = 175;
isAwake = false;
let yearOfBirth = 2024 - age;
// firstName = "Jonathan"; Does not work because firstName is const

// Calling a Function
sayGoodMorning();

// Using a Bool to control code flow
if (isAwake) {
  console.log("Awake!");
}
else {
  console.log("Asleep!")
}
