const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
const app = express();
const port = 3000;

// gunakan ejs
app.set("view engine", "ejs");

// Third-party Middleware
app.use(expressLayouts);
app.use(morgan("dev"));

// Build in middleware
app.use(express.static("public"));

// middleware
app.use((req, res, next) => {
  console.log("Time", Date.now());
  next();
});

// Routing
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
    layout: "layouts/main-layouts",
    mahasiswa,
  });
});

app.get("/about", (req, res, next) => {
  res.render("about", {
    layout: "layouts/main-layouts",
    title: "halaman about",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layouts",
    title: "halaman contact",
  });
});

app.get("/product/:id", (req, res) => {
  res.send(
    `Product Id : ${req.params.id} <br> Catergory id : ${req.query.category}`
  );
});

app.use((req, res) => {
  res.status(404);
  res.send("404");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
