let i = 0;
for (let i = 0 ; i < 5 ; i++) {
    console.log(`Iteration`, i);
};

let counter = 1;
while (counter <= 5){
    console.log(counter);
    counter++;
};


let condition = Math.random();
i = 0;
console.log(i);
while (condition > 0.1){
    i++
    console.log(i);
    condition = Math.random();
}

const favFoods = ['pizza', 'sushi', 'burgers', 'salad'];
for (let i=0; i< favFoods.length;i++){
    console.log(favFoods[i]);
}

for (let food of favFoods){
    console.log(food);
}

favFoods.forEach((food) => {console.log(food)});

// TODO: Challenge 1
const favAnimals = [`cat`, `lion`, `eagle`, `tiger`];
for (let animal of favAnimals){console.log(animal);}

// TODO: Challenge 2
const favColours = ['blue', 'green', 'red', 'yellow'];
favColours.forEach((colour) => {console.log(colour);})

// TODO: Challenge 3
favNumbers = [3, 7, 2, 9, 4, Infinity];
i = 0;
while(i <= favNumbers.length){
    console.log(favNumbers[i]);
    i++;
}