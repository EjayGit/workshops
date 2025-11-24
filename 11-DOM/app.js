console.log("Hello world");

const body = document.querySelector("body");
console.log(body);

const h1 = document.createElement("h1");
console.log(h1);

body.appendChild(h1);

const h1ReSelected = document.querySelector("h1");
console.log(h1ReSelected);

h1ReSelected.textContent = "This is my first DOM manipulation!";

//h1.remove();

const orderedList = document.createElement("ol");
const listElement = document.createElement("li");

orderedList.appendChild(listElement);
orderedList.appendChild(listElement.cloneNode(true));
orderedList.appendChild(listElement.cloneNode(true));

body.appendChild(orderedList);

orderedList.style.color = "whitesmoke";
orderedList.style.backgroundColor = "green";
orderedList.style.width = "200px";
orderedList.style.borderRadius = "8px";
orderedList.style.padding = "10px";
orderedList.style.paddingLeft = "30px";
