"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserValidations = exports.updateUserValidationSchema = exports.createUserValidationSchema = void 0;
const zod_1 = require("zod");
exports.createUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string().optional(),
        email: zod_1.z.string().email(),
        password: zod_1.z.string(),
        role: zod_1.z.enum(["admin", "user"]).optional(),
        donatedAmount: zod_1.z.string().optional(),
        donations: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
exports.updateUserValidationSchema = zod_1.z.object({
    body: zod_1.z.object({
        username: zod_1.z.string().optional(),
        email: zod_1.z.string().email().optional(),
        password: zod_1.z.string().optional(),
        role: zod_1.z.enum(["admin", "user"]).optional(),
        donatedAmount: zod_1.z.string().optional(),
        donations: zod_1.z.array(zod_1.z.string()).optional(),
    }),
});
exports.UserValidations = {
    createUserValidationSchema: exports.createUserValidationSchema,
    updateUserValidationSchema: exports.updateUserValidationSchema,
};
