import express, { Router } from "express";
const router = express.Router();

import { loginValidation } from "../middlewares/formValidationmiddleware.js";

router.all("*", (req, res, next) => {
  next();
});

router.post("/", loginValidation, (req, res) => {
  console.log(req.body);
  res.json({ message: "login requested" });
});
export default router;
