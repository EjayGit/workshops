const message = document.createElement("p");
message.textContent = "This is your message";
const msgButton = document.getElementById(`msgBtn`);

msgButton.addEventListener("click", () => {
    document.body.appendChild(message);
    setTimeout(() => {
        message.remove();
    },5000);
});