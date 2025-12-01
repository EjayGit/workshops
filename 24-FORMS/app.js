const userForm = document.getElementById("userForm");
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(userForm);
    // console.log(formData);
    const userEntries = Object.fromEntries(formData);
    const userDisplayName = document.createElement("h2");
    const userDisplayCity = document.createElement("h2");
    const userDisplayHobby = document.createElement("h2");
    userDisplayName.innerText = userEntries.userName;
    userDisplayCity.innerText = userEntries.city;
    userDisplayHobby.innerText = userEntries.hobby;
    document.body.appendChild(userDisplayName);
    document.body.appendChild(userDisplayCity);
    document.body.appendChild(userDisplayHobby);
});

