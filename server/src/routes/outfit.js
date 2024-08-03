import express from 'express'
import { getOutfits, createOutfit } from '../controllers/outfit.js'

const OutfitRouter = express.Router();

OutfitRouter.get("/", getOutfits);

OutfitRouter.post("/", createOutfit);

export default OutfitRouter;
