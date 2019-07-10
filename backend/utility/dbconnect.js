import mongoose from "mongoose";

/**
 * Express instance
 * @param {*} app
 */

export default app => {
  mongoose.connect(
    "mongodb://vishva:vishva123@ds249267.mlab.com:49267/fullstack"
  );
  var db = mongoose.connection;
  db.on("error", () => {
    console.log("---FAILED to connect to mongoose");
  });
  db.once("open", () => {
    console.log("+++Connected to mongoose");
  });
};
