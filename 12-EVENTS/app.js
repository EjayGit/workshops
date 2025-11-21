console.log("Hello world");

const button = document.querySelector("button");
const body = document.querySelector("body");

button.addEventListener("click", function(event) {
    console.log(event);
});

button.addEventListener("mouseover", function(event) {
    console.log("Mouse over event detected");
});

button.addEventListener("mouseout", function(event) {
    console.log("Mouse out event detected");
});

document.addEventListener("keydown", function(event) {
    console.log(`Key pressed: ${event.key}`);
    if (event.key === "a") {
        body.style.backgroundColor = "aqua";
    } else if (event.key === "b") {
        body.style.backgroundColor = "blue";
    } else if (event.key === "c") {
        body.style.backgroundColor = "crimson";
    }else if (event.key === "d") {
        body.style.backgroundColor = "darkblue";
    } else if (event.key === "e") {
        body.style.backgroundColor = "firebrick";
    }
});

