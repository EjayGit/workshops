function add(a,b){
    return a + b;
}
function subtract(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}
function divide(a,b){
    return a / b;
}

function calculate(a,b,operator){
    switch (operator) {
        case "+":
            return add(a,b);
        case "-":
            return subtract(a,b);
        case "*":
            return multiply(a,b);
        case "/":
            return divide(a,b);
        default:
            return "Invalid operator";
    }
}

let a = 5;
let b = 10;
let operator = "+";
console.log(calculate(a,b,operator));

// miles accepts a number.
// convertTo accepts a string (either "kilometers" or "miles").
function convertDistance(miles, convertTo){
    function milesToKilometers(miles) {
        return miles * 1.60934;
    }
    function kilometersToMiles(kilometers){
        return kilometers / 1.60934;
    }

    if (convertTo == "kilometers") {
        return milesToKilometers(miles);
    } else if (convertTo == "miles") {
        return kilometersToMiles(miles);
    }kilometers = miles * 1.60934;
}

let distance = prompt("Enter the distance in miles:");
console.log(typeof distance);
let units = prompt("Enter the unit to convert to (kilometers or miles):");
console.log(typeof units);
console.log(convertDistance(distance, units))