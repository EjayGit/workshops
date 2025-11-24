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