import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: String,
  picture: String,
  email: {
    type: String,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const user = mongoose.model("User", schema);
export default user;
