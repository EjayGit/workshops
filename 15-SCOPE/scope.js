function fun1(){
    let test = 4;
    console.log(test);
}

function fun2(){
    test = 4;
    console.log(test);
}

let test = 5;
console.log(fun1());
console.log(test);

test = 5;
console.log(fun2());
console.log(test);
