import outfitModel from "../schema/Outfit.js";

export const getOutfits = async (req, res) => {
    try {
        const outfits = await outfitModel.find()
        req.status(200).send(outfits)
    } catch (error) {
        res.status(404).send(error)
    }
}

export const createOutfit = async (req, res) => {
    const outfit = req.body;

    const newOutfit = new outfitModel(outfit);

    try {
        await newOutfit.save();
        res.status(200).send("New Outfit Created")
    } catch (error) {
        res.status(409).send(error.message)
    }
}

