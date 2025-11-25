
function myAwesomeFunction(onAwesomeSuccess, onAwesomeFailure) {
    console.log("Running myAwesomeFunction... doing complex tasks...");
    console.log("Complex task complete. I will notify the user");

  // randomly choose if success is true or false
    const success = Math.random() > 0.5;
    if (success) {
        onAwesomeSuccess({
        message: "This is the message of success",
        });
    } else {
        onAwesomeFailure();
    }
}

function onAwesomeSuccess(data) {
    console.log("It was successful: ", data.message);
}

function onAwesomeFailure() {
    console.log("It failed :(");
}

myAwesomeFunction(onAwesomeSuccess, onAwesomeFailure);
