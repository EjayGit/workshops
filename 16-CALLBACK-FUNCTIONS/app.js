// button.addEventListener("click", function(){
//     //action
// })// This is a one time function call (as it is an anonymous function).

// function handleClick() {
//     //action
// }

// function addEventListener(type, handler){
//     //action
// }

// button.addEventListener('click', handleClick);
// //runs when user clicks, this is the preferred behaviour.
// button.addEventListener('click', handleClick());
// //immediate invocation (on script running), not preferred.


//TODO: I want to say the users name and greet the user in the console.
// - Say users name
// - Greet the user

// function sayUsername(name){
//     console.log("User's name is " + name);
// }

// function greetUser(greeting){
//     //some code
//     console.log(`${greeting}`);
// }

// function welcomeMessage(
//     greetUserParameter,
//     sayUsernameParameter,
//     usernameParameter,
//     greetingParameter
// ){
//     greetUserParameter(greetingParameter);
//     sayUsernameParameter(usernameParameter);
// }

// welcomeMessage(greetUser,sayUsername, "Ejay", "Welcome to Tech Educators!");


//TODO:

// function notifyUser(){
//     console.log("notifyUser function was called!");
// }

// function myAwesomeFunction(notifyUserCallback){
//     console.log("Running myAwesomeFunction... doing complex tasks...");
//     console.log("Complex task complete. I will notify the user");
//     notifyUserCallback();
// }

// myAwesomeFunction(notifyUser);

// //TODO:
 
function myAwesomeFunction(onCompleteCallback){
    console.log("Running myAwesomeFunction... doing complex tasks...");
    console.log("Complex task complete. I will notify the user");
    onCompleteCallback();
}

myAwesomeFunction(function(){
    console.log("notifyUser function was called!");
});

// TODO:

myAwesomeFunction(() => {
    console.log('notifyUser function was called!');
})

// TODO:

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

function subtract(a, b){
    return a - b;
}

function divide(a, b){
    return a / b;
}

function myCalculatorFunction(a, b, operationCallback) {
    console.log("Doing a calculation using the numbers: ", a, b);
    console.log(
        "We might have code that saves the result to a log or a database"
    );

    return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log(result); // Output: 3

const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2); // Output: 6

const result3 = myCalculatorFunction(5, 2, subtract);
console.log(result3); // Output: 3

const result4 = myCalculatorFunction(10, 2, divide);
console.log(result4); // Output: 5  

// add the two results together
const finalResult1 = myCalculatorFunction(result, result2, add);
console.log(finalResult1); // Output: 9

const finalResult2 = myCalculatorFunction(result3, result4, multiply);
console.log(finalResult2); // Output: 15


// TODO: Create some additional mathematical operation functions 
// that you can pass in to your calculator function. You could 
// try dividing and subtracting, you could try comparing two 
// numbers to see if they’re the same and return the result.

