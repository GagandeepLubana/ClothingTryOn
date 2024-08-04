import express from "express";
import {
  getAllOutfits,
  createOutfit,
  getOutfit,
  deleteOutfit,
  getAllSharedOutfits,
} from "../controllers/outfit.js";

const OutfitRouter = express.Router();

OutfitRouter.get("/:userId", getAllOutfits);
OutfitRouter.get("/shared", getAllSharedOutfits);
OutfitRouter.post("/", createOutfit);
OutfitRouter.get("/:id", getOutfit);
OutfitRouter.delete("/:id", deleteOutfit);
//OutfitRouter.patch("/:id/likeOutfit", likeOutfit);

export default OutfitRouter;
