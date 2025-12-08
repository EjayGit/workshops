// data storage
// global scope

const rewardCatFood = document.querySelectorAll('.rewardCatFood');
const valueCatFood = document.getElementById('valueCatFood');
const rewardInstances = document.getElementById('rewardInstances');
const catImage = document.getElementById("catImg");
const reset = document.getElementById('resetBtn');
// if there is data already in local storage, update states with this data, so the user can pick up where they left off.
const storedData = localStorage.getItem('savedCatData');
if (storedData != null){
    const parsedData = JSON.parse(storedData);
    const counter = document.getElementById("counter");
    counter.innerText = Number(parsedData.petCount);
    const pps = document.getElementById('pps');
    pps.innerText = Number(parsedData.petsPerSecond);
} else{
    const counter = document.getElementById("counter");
    const pps = document.getElementById('pps');
}
let h3Ele;
let h4Ele;
let h6Ele;
let divEle;
let btnEle;
let pEle;
let stringifiedData;

const nameList = [
    `Two Hands`,
    `Comb`,
    `Fast Hands`,
    `Super Comb`,
    `Fire Hands`,
    `Mega Brush`,
    `Ninja Hands`,
    `Grooming Kit`,
    `Classical Hair Package`,
    `Quantum Hair Package`
];

// fetch upgrades from api
async function getStuff(){
    try{
        const response = await fetch('https://cookie-upgrade-api.vercel.app/api/upgrades');
        const data = await response.json();
        buildButtons(data, nameList);
    } catch (error){
        console.error(error);
    }
}

// Local storage
let stats = {
    petCount: counter,
    petsPerSecond: pps
}

// Shop upgrades
function rewardClicked(data){
    // if there are more clicks than cost
    if (Number(counter.innerText) >= data.cost){
        // reduce clicks by cost
        counter.innerText = Number(counter.innerText) - data.cost;
        // increase ppt by given amount.
        pps.innerText = Number(pps.innerText) + data.increase;
        // make sure local storage values are updated when user buys from shop and when pets cat.
        stats = {
            petCount: counter.innerText,
            petsPerSecond: pps.innerText
        }
        stringifiedData = JSON.stringify(stats);
        localStorage.setItem('savedCatData', stringifiedData);
    } else {}// else do nothing
}

// Build buttons
function buildButtons(data, nameList){
    for (let i = 0 ; i < data.length ; i++){
        h3Ele = document.createElement('h3');
        h3Ele.innerText = nameList[i];
        h4Ele = document.createElement('h4');
        h4Ele.className = 'cost';
        h4Ele.innerText = data[i].cost;
        h6Ele = document.createElement('h6');
        h6Ele.className = 'pps';
        h6Ele.innerText = data[i].increase;
        divEle = document.createElement('div');
        divEle.className = 'itemContainer';
        btnEle = document.createElement('button');
        btnEle.className = 'rewardContainer';
        btnEle.addEventListener('click', () => {
            rewardClicked(data[i]);
        });
        divEle.appendChild(h4Ele);
        divEle.appendChild(h6Ele);
        btnEle.appendChild(h3Ele);
        btnEle.appendChild(divEle);
        const buttonsContainer = document.getElementById('shopContainer');
        buttonsContainer.appendChild(btnEle);
    }
}
getStuff();

// when the user clicks on the cat, the count goes up by 1.
catImage.addEventListener('click', () => {
    counter.innerText = Number(counter.innerText) + 1;
});

// The interval
setInterval(function () {
    counter.innerText = Number(counter.innerText) + Number(pps.innerText);
    // update the DOM to reflect the changes in the values
    // save the vales in local storage.
    stats = {
        petCount: counter.innerText,
        petsPerSecond: pps.innerText
    }
    stringifiedData = JSON.stringify(stats);
    localStorage.setItem('savedCatData', stringifiedData);
}, 1000);

reset.addEventListener('click', () => {
    counter.innerText = 0;
    pps.innerText = 0;
})
