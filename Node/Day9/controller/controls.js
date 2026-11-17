import userModel from "../model/model.js";

export const controls = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    res.status(201).json({ msg: "data saved successfully", data: user });
  } catch (error) {
    console.log("error....", error.message);
    res.status(400).json({ msg: error.message });
  }
};