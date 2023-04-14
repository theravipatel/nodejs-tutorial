/**
 * Object Property Shorthand
 */

const name = 'John Doe';
const userAge = 30;

// Normal Object
const user1 = {
    name: name,
    age: userAge,
    location: 'New York'
}
console.log(user1); // Output: { name: 'John', age: 27, location: 'Philadelphia' }


// With Shorthand
const user2 = {
    name,
    age: userAge,
    location: 'New York'
}
console.log(user2); // Output: { name: 'John Doe', age: 30, location: 'New York' }


// Object Destructuring
const { age, location:address } = user1;
console.log(age); // Output: 30
console.log(address); // Output: New York

// Function Arguments Destructuring
const getUserDetail = ({ name, age }) => {
    console.log(age); // Output: 30
    console.log(address); // Output: New York
}
getUserDetail(user1);