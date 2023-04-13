const yargs = require('yargs');
yargs.version('1.0.0');

yargs.command({
    command: "add",
    describe: "Add a static note text!",
    handler: () => {
        console.log("Hello World!");
    }
});

//Adding Command Options
yargs.command({
    command: "add2",
    describe: "Add a dynamic note text from commands options!",
    builder: {
        title: { // Option Name
            describe: "Title of a note!",
            demandOption: true, // True means option is required to pass with the command
            type: String // Type of option
        },
        body: { // Option Name
            describe: "Body of a note!",
            demandOption: false, // false means option is not required to pass with the command
            type: String // Type of option
        }
    },
    handler: function (argv) {
        console.log('Title: ' + argv.title)
        console.log('Body: ' + argv.body)
    }
});


console.log(yargs.argv);