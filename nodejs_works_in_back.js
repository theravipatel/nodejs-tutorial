console.log("Task 1");

setTimeout(() => {
    console.log("Task 2 will execute last.");
}, 1000);

setTimeout(() => {
    console.log("Task 3");
}, 0);

console.log("Task 4");