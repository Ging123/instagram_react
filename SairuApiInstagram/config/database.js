var mongoose = require("mongoose");
mongoose.Promise = global.Promise;

require("dotenv").config();
const uri =
  "mongodb+srv://sairu:admin@cluster0.ho4bt.mongodb.net/instagramClone?retryWrites=true&w=majority";
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connection succesful"))
  .catch((err) => console.error(err));
