import mongoose from "mongoose";

const schema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  goal: Number,
  reminderInterval: Number,
  logs: [
    {
      timestamp: {
        type: Date,
        default: Date.now,
      },
      waterQuantity: Number,
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const waterhabit = mongoose.model("Waterhabit", schema);
export default waterhabit;
