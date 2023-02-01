let x = 10;
let y = 0;

let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        y = 20;
        resolve(y);
    }, 1000);
});

promise.then((data) => {
    y = data;
    console.log("10 + 20 = 30 --> ", x + y);
});

console.log("This will execute first as 10 + 0 = 10 --> ", x + y);
console.log("=========");