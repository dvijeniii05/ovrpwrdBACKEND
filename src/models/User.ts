import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  isFullyOnboarded: {
    type: Boolean,
    required: true,
    default: false,
  },
  nickname: {
    type: String,
    required: false,
  },
  fullName: {
    type: String,
    required: false,
  },
  dob: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  avatar: {
    type: String,
    required: false,
  },
  steamID32: {
    type: String,
    required: false,
  },
  startingGameID: {
    type: String,
    required: false,
  },
  startingGameTime: {
    type: String,
    required: false,
  },
  perks: {
    type: Number,
    required: true,
    default: 0,
  },
  relics: {
    type: Number,
    required: true,
    default: 0,
  },
  lastTenMatches: {
    type: Array,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", UserSchema);
