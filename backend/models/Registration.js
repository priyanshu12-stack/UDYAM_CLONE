import mongoose from "mongoose";

const registrationSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    aadhaar: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true }
  },
  { timestamps: true }
);

export default mongoose.model("Registration", registrationSchema);