import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  reminderInterval: Number,
  logs: [
    {
        timestamp: Date,
        activity: String,
    }
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const breakhabit = mongoose.model("Breakhabit", schema);
export default breakhabit;
