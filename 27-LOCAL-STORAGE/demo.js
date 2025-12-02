console.log(`Hello Universe`);

// local storage is an object.
// We have methods to store, read, delete data from local storage.
// We can only store strings.

const userPreferences = {
    theme: 'dark',
    font: 'large',
    contrast: 'high',
    colourblindMode: true,
};
//========================================
// Place data into local storage.
// Step 1: Stringify the data
const stringifiedPreferences = JSON.stringify(userPreferences);

// Step 2: Add stringified data to local storage.
localStorage.setItem('user preferences', stringifiedPreferences);

//========================================
// Read data from local storage.
// Step 1: get data
const storedPreferences = localStorage.getItem('user preferences');

// Step 2: parse stringified data to its original shape.
const parsedPreferences = JSON.parse(storedPreferences);
console.log(parsedPreferences);
const theme = parsedPreferences.theme;
console.log(theme);

//=====================================
// Remove item from local storage.
localStorage.removeItem("user preferences");

// remove all local storage
localStorage.clear();