"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eyeglassRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const eyeglass_validation_1 = require("./eyeglass.validation");
const eyeglass_controller_1 = require("./eyeglass.controller");
const router = express_1.default.Router();
router.post("/create", (0, validateRequest_1.default)(eyeglass_validation_1.eyeGlassValidation.createEyeGlassZodSchema), eyeglass_controller_1.eyeGlassController.createEyeGlass);
router.patch("/:id", (0, validateRequest_1.default)(eyeglass_validation_1.eyeGlassValidation.updateEyeGlassZodSchema), eyeglass_controller_1.eyeGlassController.updateEyeGlass);
router.get("/:id", eyeglass_controller_1.eyeGlassController.getSingleEyeGlass);
router.delete("/:id", eyeglass_controller_1.eyeGlassController.deleteEyeGlass);
router.get("/", eyeglass_controller_1.eyeGlassController.getAllEyeGlass);
exports.eyeglassRoutes = router;
