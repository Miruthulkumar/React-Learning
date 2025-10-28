import mongoose from "mongoose";

const studyCenterUserInfoScheme = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("StudyCenterUserInfo", studyCenterUserInfoScheme);
