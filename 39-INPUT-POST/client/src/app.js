const messageForm = document.getElementById("messageForm");

function eventHandler(event){
    event.preventDefault();
    console.log('form submitted');
    
    const formData = new FormData(messageForm);
    const userInfo = formData.get("message");

    fetch('http://localhost:8080/message',{
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({userInfo}),
    });
    console.log(userInfo);
}

messageForm.addEventListener("submit", eventHandler);