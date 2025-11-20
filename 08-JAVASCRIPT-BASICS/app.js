let currentStatus = ["old","was"];

for (let i=1; i < 11; i++) {
    console.log(`My ${currentStatus[0]} favourite number ${currentStatus[1]} ${i}`);
}

const pi = 3.14;
console.log(`The value of pi is approximately ${pi}`);
pi = 3.14159; // This will cause an error because pi is a constant