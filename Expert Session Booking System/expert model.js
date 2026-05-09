import mongoose from "mongoose";

const expertSchema = new mongoose.Schema({
  name: String,
  category: String,
  experience: Number,
  rating: Number,
  availableSlots: [
    {
      date: String,
      slots: [String]
    }
  ]
});

export default mongoose.model("Expert", expertSchema);