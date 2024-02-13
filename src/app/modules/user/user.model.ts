import mongoose, { Schema } from "mongoose";
import { IUser } from "./user.interface";

const userSchema: Schema<IUser> = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  donatedAmount: {
    type: String,
    default: "0",
  },
  donations: [
    {
      type: String,
      default: "",
    },
  ],
});

export const User = mongoose.model<IUser>("User", userSchema);
