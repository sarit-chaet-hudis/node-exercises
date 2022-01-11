const request = require("postman-request");
request(
  "https://dog.ceo/api/breeds/list/all",
  function (error, response, body) {
    console.log("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    console.log("body:", body); // Print the HTML for the Google homepage.
  }
);
