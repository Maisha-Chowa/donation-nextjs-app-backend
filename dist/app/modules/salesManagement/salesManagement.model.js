"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesManagementModel = void 0;
const mongoose_1 = require("mongoose");
const SalesManagementSchema = new mongoose_1.Schema({
    QuantityOfTheProduct: {
        type: String,
        required: true,
    },
    NameOfTheBuyer: {
        type: String,
        required: true,
    },
    DateOfTheSale: {
        type: String,
        required: true,
    },
});
exports.SalesManagementModel = (0, mongoose_1.model)("SalesManagement", SalesManagementSchema);
