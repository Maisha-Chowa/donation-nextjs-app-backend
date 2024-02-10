"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.donationRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const donation_validation_1 = require("./donation.validation");
const donation_controller_1 = require("./donation.controller");
const router = express_1.default.Router();
router.post("/create", (0, validateRequest_1.default)(donation_validation_1.donationValidation.createdonationZodSchema), donation_controller_1.donationController.createdonation);
router.patch("/:id", (0, validateRequest_1.default)(donation_validation_1.donationValidation.updatedonationZodSchema), donation_controller_1.donationController.updatedonation);
router.get("/:id", donation_controller_1.donationController.getSingledonation);
router.delete("/:id", donation_controller_1.donationController.deletedonation);
router.get("/", donation_controller_1.donationController.getAlldonation);
exports.donationRoutes = router;
