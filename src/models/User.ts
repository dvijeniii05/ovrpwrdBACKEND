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
  appleUserId: {
    type: String,
    required: false,
  },
  revUserId: {
    type: String,
    required: false,
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
  premium: {
    type: {
      isPremiumActive: {
        type: Boolean,
        required: true,
        default: false,
      },
      premiumGamesLeft: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    required: true,
  },
  dota: {
    type: {
      latestGameId: {
        type: Number,
        required: false,
      },
      latestGameTime: {
        type: String,
        required: false,
      },
      significantMatches: {
        type: Array,
        required: true,
      },
    },
    required: true,
  },
  purchases: {
    type: Array,
    required: true,
  },
  rewards: {
    type: {
      leftGiftClaimedDate: {
        type: Number,
        required: true,
        default: 0,
      },
      midGiftClaimedDate: {
        type: Number,
        required: true,
        default: 0,
      },
      rightGiftClaimedDate: {
        type: Number,
        required: true,
        default: 0,
      },
    },
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("User", UserSchema);
