var express = require("express");
var path = require("path");
var logger = require("morgan");
var cors = require("cors");
const PORT = 5000;
require("./config/database");

var usersRouter = require("./app/routes/users");
var app = express();


app.use(function(req, res, next) {

  //to allow cross domain requests to send cookie information.
  res.header('Access-Control-Allow-Credentials', true);
  
  // origin can not be '*' when crendentials are enabled. so need to set it to the request origin
  res.header('Access-Control-Allow-Origin',  req.headers.origin);
  
  // list of methods that are supported by the server
  res.header('Access-Control-Allow-Methods','OPTIONS,GET,PUT,POST,DELETE');
  
  res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, X-XSRF-TOKEN');
  
      next();
  });

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
