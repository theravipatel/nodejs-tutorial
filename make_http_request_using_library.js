const axios = require("axios");

// GET request
axios
  .get("https://reqres.in/api/users/2")
  .then((response) => {
    console.log(response.data);
    console.log(response.data.data.email);
  })
  .catch((error) => {
    console.log(error);
  });