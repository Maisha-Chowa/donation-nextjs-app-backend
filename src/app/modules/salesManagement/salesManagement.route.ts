import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { SalesValidation } from "./salesManagement.validation";
import { salesManagementController } from "./salesManagement.controller";
const router = express.Router();
router.post(
  "/create",
  validateRequest(SalesValidation.createSalesZodSchema),
  salesManagementController.createSales
);
router.get("/", salesManagementController.getAllSales);

export const salesManagementRoutes = router;
