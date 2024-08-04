import outfitModel from "../schema/Outfit.js";
import mongoose from "mongoose";

export const getAllOutfits = async (req, res) => {
  try {
    const userId = req.params.userId;
    const outfits = await outfitModel.find({ userId: userId });
    if (outfits.length === 0) {
      return res.status(404).send("No records found for the user");
    }
    req.status(200).send(outfits);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getAllSharedOutfits = async (req, res) => {
  try {
    const outfits = await outfitModel.find({ Shared: true });
    if (outfits.length === 0) {
      return res.status(404).send("No records found for the user");
    }
    req.status(200).send(outfits);
  } catch (error) {
    res.status(404).send(error);
  }
};

export const createOutfit = async (req, res) => {
  const outfit = req.body;

  const newOutfit = new outfitModel(outfit);

  try {
    await newOutfit.save();
    res.status(200).send("New Outfit Created");
  } catch (error) {
    res.status(409).send(error.message);
  }
};

export const deleteOutfit = async (req, res) => {
  id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  try {
    await outfitModel.findByIdAndRemove(id);
    res.status(200).send("Outfit deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

export const getOutfit = async (req, res) => {
  outfitId = req.params.id;

  try {
    const outfit = await outfitModel.findById(outfitId);
    res.status(200).json(outfit);
  } catch (error) {
    res.status(404).send(error);
  }
};
