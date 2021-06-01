var express = require("express");
var path = require("path");
var logger = require("morgan");
var cors = require("cors");
const PORT = 3000;
require("./config/database");

var usersRouter = require("./app/routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

app.use("/users", usersRouter);

app.listen(PORT, function () {
  console.log("listening on" + PORT);
});
module.exports = app;
