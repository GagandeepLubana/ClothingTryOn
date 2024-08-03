import mongoose from "mongoose";

const outfitSchema = mongoose.Schema({
    title: String,
    creator: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    }
})

const outfitModel = mongoose.model("Outfit", outfitSchema);

export default outfitModel