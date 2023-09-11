const express = require("express");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "ryuta",
      email: "rafi@gmail.com",
    },
    {
      nama: "ryuna",
      email: "ryuna@gmail.com",
    },
    {
      nama: "kyuza",
      email: "kyuza@gmail.com",
    },
  ];

  res.render("index", {
    nama: "Ryutaaaa",
    title: "Home",
    mahasiswa,
  });
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/contact", (req, res) => {
  res.render("contact");
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
