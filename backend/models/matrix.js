import mongoose from "mongoose";
var Schema = mongoose.Schema;
// create a schema
var matrixSchema = new Schema(
  {
    _id: String,
    index: Number,
    guid: String,
    isActive: Boolean,
    value: Number,
    sensorType: String,
    time: String
  },
  { collection: "matrix" }
);
// we need to create a model using it
export default mongoose.model("matrix", matrixSchema);
