const https = require("https");
const url = "https://reqres.in/api/users/2";
const request = https.request(url, (response) => {
    let data = "";
    response.on("data", (chunk) => {
        data = data + chunk.toString();
    });
    response.on("end", () => {
        const body = JSON.parse(data);
        console.log(body);
        console.log(body.data.email);
    });
});
request.on("error", (error) => {
    console.log("An error", error);
});
request.end();
