"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesManagementRoutes = void 0;
const express_1 = __importDefault(require("express"));
const validateRequest_1 = __importDefault(require("../../middlewares/validateRequest"));
const salesManagement_validation_1 = require("./salesManagement.validation");
const salesManagement_controller_1 = require("./salesManagement.controller");
const router = express_1.default.Router();
router.post("/create", (0, validateRequest_1.default)(salesManagement_validation_1.SalesValidation.createSalesZodSchema), salesManagement_controller_1.salesManagementController.createSales);
router.get("/", salesManagement_controller_1.salesManagementController.getAllSales);
exports.salesManagementRoutes = router;
