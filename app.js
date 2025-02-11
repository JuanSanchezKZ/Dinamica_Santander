const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path");

app.use(express.static("public"));

app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "views", "home.html"))
);

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
