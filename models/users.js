import mongoose, { Schema } from "mongoose";

const usersSchema = new Schema({
  username: {
    required: true,
    type: String,
  },
  apiKey: {
    required: true,
    type: String,
  }
});

export const usersModel = mongoose.model("users", usersSchema);
