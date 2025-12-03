const form = document.querySelector('form');

function savePreferences(e){
    e.preventDefault();

    const formData = new FormData(form);
    const colour = formData.get("colour");
    const fontSize = formData.get('fontSize');
    const url = formData.get('url');
    const preferences = {
        colour,
        fontSize,
        url,
    };

    localStorage.setItem('preferences', JSON.stringify(preferences));
}

form.addEventListener('submit', savePreferences);

preferences2 = JSON.parse(localStorage.getItem('preferences'));

if (preferences2){
    const colourInput = document.getElementById('colour');
    const fontInput = document.getElementById('fontSize');
    const urlInput = document.getElementById('url');
    colourInput.value = preferences2.colour;
    fontInput.value = preferences2.fontSize;
    urlInput.value = preferences2.url;
}

function loadPreferences(){
    const preferences3 = JSON.parse(localStorage.getItem('preferences'));
    
    console.log("test");

    if(preferences3){
        colourInput = document.getElementById('colour');
        colourInput.value = preferences3.colour || "#000000";
        const body = document.querySelector('body');
        body.style.backgroundColor = preferences3.colour || "#000000";
        fontInput = document.getElementById('fontSize');
        input.value = preferences3.fontSize;
        const h1 = document.querySelector('h1');
        h1.style.fontSize = preferences3.fontSize;
        urlInput = document.getElementById('url');
        input.value = preferences3.url;
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

