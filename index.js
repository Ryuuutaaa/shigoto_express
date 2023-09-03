const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("contact.html", { root: __dirname });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Product Id : ${req.params.id} <br> Catergory id : ${req.query.category}`
  );
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
