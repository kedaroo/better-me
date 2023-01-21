import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  goal: Number,
  reminderTime: Date,
  logs: [
    {
      timestamp: {
        type: Date,
        default: Date.now,
      },
      quality: Number,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const sleephabit = mongoose.model("Sleephabit", schema);
export default sleephabit;
