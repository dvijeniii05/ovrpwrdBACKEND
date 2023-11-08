import mongoose from "mongoose";

const LeagueSchema = new mongoose.Schema({
  season: {
    type: Number,
    required: true,
  },
  leagueName: {
    type: String,
    required: true,
  },
  endDate: {
    type: Number,
    required: true,
  },
  pointsMin: {
    type: Number,
    required: true,
  },
  pointsMax: {
    type: Number,
    required: true,
  },
  lastTimeWinner: {
    type: {
      winnerName: { type: String, required: true },
      prizeName: { type: String, required: true },
      prizeValue: { type: Number, required: true },
      prizeImageUrl: { type: String, required: true },
      season: { type: String, required: true },
    },
    required: true,
  },
  sponsorInformation: {
    type: String,
    required: false,
  },
  prizes: {
    type: [
      {
        prizeBrand: { type: String, required: true },
        prizeName: { type: String, required: true },
        prizeDescription: { type: String, required: true },
        imageUrl: { type: String, required: true },
        linkToProduct: { type: String, required: true },
        isPremium: { type: Boolean, required: true },
      },
    ],
    required: true,
  },
});

export default mongoose.model("League", LeagueSchema);
