const mongoose = require("mongoose");
mongoose.set("strictQuery", true);

const connectDB = (uri) => {
  console.log("haa bhai chalu ho gaya hun");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
