import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { donationValidation } from "./donation.validation";
import { donationController } from "./donation.controller";
const router = express.Router();

router.post(
  "/create",
  validateRequest(donationValidation.createdonationZodSchema),
  donationController.createdonation
);
router.patch(
  "/:id",
  validateRequest(donationValidation.updatedonationZodSchema),
  donationController.updatedonation
);
router.get("/:id", donationController.getSingledonation);
router.delete("/:id", donationController.deletedonation);
router.get("/", donationController.getAlldonation);

export const donationRoutes = router;
