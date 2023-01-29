// import { abc } from './import_file'; // this will not work in nodejs

console.log("=========");

var x = 10;
let y = 20;
const z = 30;

console.log(x+y+z); // 10+20+30 = 60

console.log("=========");

if (x==10) {
    console.log("matched");
} else {
    console.log("not matched");
}

console.log("=========");

for (var i=1; i<=5; i++) {
    console.log(i);
}

console.log("=========");

var arr = [10, 2, 4, 7, 2, 8];
console.log(arr[0]); //10

console.log("=========");

var filter_res = arr.filter(function(item) {
    //return item; // Print whole array as it is 
    return item > 5; // Print array with value greater than 5  
});
console.log(filter_res);