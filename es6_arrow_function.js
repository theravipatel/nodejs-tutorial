/**
 * ES5 Function
 */
const square1 = function (x) {
    return x * x
}
console.log(square1(2)); // Output: 4


/** 
 * ES6 Standard Arrow Function
 */
const square2 = (x) => {
    return x * x
}
console.log(square2(2)); // Output: 4


/**
 * ES6 Shorthand Arrow Function
 */
const square3 = (x) => x * x

console.log(square3(2)); // Output: 4

/**
 * 'this' Binding
 */
const eventData = {
    name: 'Birthday Party',
    guestList: ['John', 'Sam', 'Adam'],
    printGuestList() {
        console.log('Guest list for ' + this.name);

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        });
    }
}
eventData.printGuestList();
/** 
 * Output:
 *      Guest list for Birthday Party
 *      John is attending Birthday Party
 *      Sam is attending Birthday Party
 *      Adam is attending Birthday Party
*/ 