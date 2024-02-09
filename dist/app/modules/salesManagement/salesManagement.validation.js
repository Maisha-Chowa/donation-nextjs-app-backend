"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesValidation = void 0;
const zod_1 = require("zod");
const createSalesZodSchema = zod_1.z.object({
    body: zod_1.z.object({
        QuantityOfTheProduct: zod_1.z.string({
            required_error: "QuantityOfTheProduct is required",
        }),
        NameOfTheBuyer: zod_1.z.string({
            required_error: "NameOfTheBuyer is required",
        }),
        DateOfTheSale: zod_1.z.string({
            required_error: "DateOfTheSale is required",
        }),
    }),
});
exports.SalesValidation = {
    createSalesZodSchema,
};
