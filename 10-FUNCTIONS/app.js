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

console.log(convertDistance(10, 'miles'))