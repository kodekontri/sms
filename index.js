const express = require("express");
const exphbs = require("express-handlebars");
const morgan = require("morgan");
const dotenv = require("dotenv");
const db = require("./config/db");

//load config
dotenv.config({ path: "./config/config.env" });

app = express();

//config
db();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//handlebars
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

//routes
app.use("/", (req, res) => {
  res.render("home");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Running on " + process.env.NODE_ENV + " mode at port " + PORT);
});
