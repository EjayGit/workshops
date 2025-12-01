const userForm = document.getElementById("userForm");
userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(userForm);
    console.log(formData);
    const userEntries = Object.fromEntries(formData);
    console.log(userEntries);
});