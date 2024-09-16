let speedInput = 72;
let speedOutput = 0;
speedOutput = speedInput / 3.6;
console.log(speedOutput);


let minutesInput = 3;
let secondsOutput = 0;
secondsOutput = minutesInput * 60;
console.log(secondsOutput);

let divisionInput1 = 11;
let divisionInput2 = 4;
let divisionOutput = 0;
divisionOutput = divisionInput1 / divisionInput2;
console.log(divisionOutput);

let remainderOutput = 0;
remainderOutput = divisionInput1 % divisionInput2;
console.log(remainderOutput);

// PART 2

let radiusInput = 2;
let areaOfCircle;
areaOfCircle = Math.PI * Math.pow(radiusInput, 2);
console.log(areaOfCircle);

let negationNumber = 11;
let negatedOutput;
negatedOutput = negationNumber * - 1;
console.log(negatedOutput);

let weightInKilograms = 74;
let heightInMeters = 1.72;
let bMI;
bMI = weightInKilograms / Math.pow(heightInMeters, 2);
console.log(bMI);


let sideA = 3;
let sideB = 4;
let hypotenuse;
let squareOfAAndB = Math.pow(sideA, 2) + Math.pow(sideB, 2)
hypotenuse = Math.sqrt(squareOfAAndB);
console.log(hypotenuse);


let secondsInput = 111;
let minSecOutput;

let minOutput;
minOutput = Math.floor(secondsInput / 60);
console.log(minOutput);

let secOutput;
// secOutput = secondsInput - minOutput * 60;
secOutput = secondsInput % 60;
console.log(secOutput);

// Text Styling
minSecOutput = minOutput + " minute(s) and " + secOutput + " second(s)";
console.log(minSecOutput);
