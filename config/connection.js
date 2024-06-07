const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/NoSQLConnect",
  {
    useNewUrlParser: true, // Deprecated, can be removed
    useUnifiedTopology: true // Deprecated, can be removed
  }
);

// log mongo queries being executed!
mongoose.set("debug", true);

module.exports = mongoose.connection;