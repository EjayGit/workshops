const userForm = document.getElementById("userForm");
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(userForm);
    // console.log(formData);
    const userEntries = Object.fromEntries(formData);
    console.log(userEntries);
    const userDisplay = document.createElement("h2");
    for (let i = 0 ; i < Object.keys(userEntries).length ; i++) {
        userDisplay.innerText = `${Object.entries(userEntries)[i][0]}: ${Object.entries(userEntries)[i][1]}`;
        document.body.appendChild(userDisplay.cloneNode(true));
    };
});

