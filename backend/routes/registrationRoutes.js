import express from "express";
import Registration from "../models/Registration.js";

const router = express.Router();

// POST - Register
router.post("/", async (req, res) => {
  try {
    const { name, aadhaar, email, mobile } = req.body;
    const newReg = new Registration({ name, aadhaar, email, mobile });
    await newReg.save();
    res.status(201).json({ message: "Registration successful", data: newReg });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET - All Registrations
router.get("/", async (req, res) => {
  const regs = await Registration.find();
  res.json(regs);
});

export default router;