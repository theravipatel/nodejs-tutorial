const book = {
    title: 'The NodeJS Tutorial',
    author: 'Ravi Patel'
   }
// Covert JavaScript object into JSON string
const bookJSON = JSON.stringify(book);
console.log(bookJSON); // Print: {"title":"The NodeJS Tutorial","author":"Ravi Patel"}

// Covert JSON string into object
const bookObject = JSON.parse(bookJSON);
console.log(bookObject.title); // Print: The NodeJS Tutorial