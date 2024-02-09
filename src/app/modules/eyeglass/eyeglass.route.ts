import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { eyeGlassValidation } from "./eyeglass.validation";
import { eyeGlassController } from "./eyeglass.controller";
const router = express.Router();

router.post(
  "/create",
  validateRequest(eyeGlassValidation.createEyeGlassZodSchema),
  eyeGlassController.createEyeGlass
);
router.patch(
  "/:id",
  validateRequest(eyeGlassValidation.updateEyeGlassZodSchema),
  eyeGlassController.updateEyeGlass
);
router.get("/:id", eyeGlassController.getSingleEyeGlass);
router.delete("/:id", eyeGlassController.deleteEyeGlass);
router.get("/", eyeGlassController.getAllEyeGlass);

export const eyeglassRoutes = router;
