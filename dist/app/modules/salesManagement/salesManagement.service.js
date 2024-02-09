"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.salesManagementService = void 0;
const salesManagement_model_1 = require("./salesManagement.model");
const createSales = (salesData) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield salesManagement_model_1.SalesManagementModel.create(salesData);
    return result;
});
const getAllSales = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield salesManagement_model_1.SalesManagementModel.find();
    const total = yield salesManagement_model_1.SalesManagementModel.countDocuments();
    return {
        meta: {
            page: 1,
            limit: 10,
            total,
        },
        data: result,
    };
});
exports.salesManagementService = {
    createSales,
    getAllSales,
};
