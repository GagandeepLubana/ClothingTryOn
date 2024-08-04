import mongoose from "mongoose";

const outfitSchema = mongoose.Schema({
  username: String,
  userId: String,
  poseURL: String,
  garmentURL: String,
  outputURL: String,
  Shared: Boolean,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const outfitModel = mongoose.model("Outfit", outfitSchema);

export default outfitModel;
