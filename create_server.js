var http = require('http');

//create a server object:
http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'}); // 200 status, HTML content type
    res.write('Hello World!'); //write a response to the client
    res.end(); //end the response
}).listen(5000); //the server object listens on port 5000