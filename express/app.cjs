const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());

app.get("/numbers", function (req, res) {
  res.send("success using get");
});

app.post("/numbers", function (req, res) {
  res.send("success using post");
});
app.delete("/numbers", function (req, res) {
  res.send("success using delete");
});

app.put("/numbers", function (req, res) {
  res.send("success using put");
});

app.listen({ port }, () => console.log(`server running on port ${port}`));
