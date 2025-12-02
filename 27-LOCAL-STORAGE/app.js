const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);
    const colour = formData.get('colour');

    localStorage.setItem("colour", colour);
});

// const colour = localStorage.getItem("colour");

// if (colour) {
//     const input = document.querySelector("input");
//     input.value = colour;
// }

