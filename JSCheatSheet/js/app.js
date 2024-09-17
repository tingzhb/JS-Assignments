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
