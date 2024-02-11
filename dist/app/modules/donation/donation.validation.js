"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.donationValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const createdonationZodSchema = zod_1.default.object({
    body: zod_1.default.object({
        title: zod_1.default.string({
            required_error: "Donation Title is required",
        }),
        image: zod_1.default.string({
            required_error: "Donation image is required",
        }),
        category: zod_1.default.string({
            required_error: "Donation category is required",
        }),
        description: zod_1.default.string({
            required_error: "Donation description is required",
        }),
        amount: zod_1.default.string({
            required_error: "Donation  amount is required",
        }),
        collectedAmount: zod_1.default.string().optional(),
        endDate: zod_1.default.string({
            required_error: "Donation  amount is required",
        }),
        donators: zod_1.default.array(zod_1.default.string()).optional(),
    }),
});
const updatedonationZodSchema = zod_1.default.object({
    body: zod_1.default.object({
        title: zod_1.default.string().optional(),
        image: zod_1.default.string().optional(),
        category: zod_1.default.string().optional(),
        description: zod_1.default.string().optional(),
        amount: zod_1.default.string().optional(),
        collectedAmount: zod_1.default.string().optional(),
        endDate: zod_1.default.string().optional(),
        donators: zod_1.default.array(zod_1.default.string()).optional(),
    }),
});
exports.donationValidation = {
    createdonationZodSchema,
    updatedonationZodSchema,
};
