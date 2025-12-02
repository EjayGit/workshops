// setTimeout(function(){
//     console.log(`This message appeared after 5 seconds`);
// }, 5000);


// setInterval(() => {
//     console.log(`Please, drink water!`);
// }, 3000);




const rentReminder = setInterval(() => {
    console.log(`Pay your rent`);
}, 2000);

setTimeout(() => {
    clearInterval(rentReminder);
}, 10026);