const form = document.querySelector('form');

function savePreferences(e){
    e.preventDefault();

    const formData = new FormData(form); const colour = formData.get("colour");

    const preferences = {
        colour,
    };

    localStorage.setItem('preferences', JSON.stringify(preferences));
}

form.addEventListener('submit', savePreferences);

preferences2 = JSON.parse(localStorage.getItem('preferences'));

if (preferences2){
    const input = document.querySelector('input');
    input.value = preferences2.colour;
}

function loadPreferences(){
    const preferences3 = JSON.parse(localStorage.getItem('preferences'));

    if(preferences3){
        const input = document.querySelector('input');
        input.value = preferences3.colour || "#000000";

        const body = document.querySelector('body');
        body.style.backgroundColor = preferences3.colour || "#000000";
    }
}

loadPreferences();

function clearPreferences(event){
    event.preventDefault();

    localStorage.removeItem('preferences');
}

function resetToDefault(event){
    event.preventDefault();
    const defaults = {
        colour: "#000000",
    }
    localStorage.setItem('preferences', defaults.colour);
    body.style.backgroundColor = defaults.colour;
}

const resetBtn = document.addEventListener('click', resetToDefault);


function handleLocalStorageChange(event){
    if (event.key === "favouriteColour"){
        const newValue = event.newValue;
        console.log(`Local storage favouriteColour changed to: ${newValue}`);
    }
}

window.addEventListener('storage', handleLocalStorageChange);

