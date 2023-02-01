// Demo 1
console.log("Task 1");
console.log("Task 2");
console.log("Task 3");

console.log("============");

// Demo 2 - Here Task 3 will execute after Task 1.
console.log("Task 1");
setTimeout(() => {
    console.log("Task 2 will execute last.");
}, 1000);
console.log("Task 3");