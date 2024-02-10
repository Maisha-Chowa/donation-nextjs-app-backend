"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.donationValidation = void 0;
const zod_1 = __importDefault(require("zod"));
const donation_constants_1 = require("./donation.constants");
const createdonationZodSchema = zod_1.default.object({
  body: zod_1.default.object({
    name: zod_1.default.string({
      required_error: "Product name is required",
    }),
    price: zod_1.default.string({
      required_error: "Product price is required",
    }),
    quantity: zod_1.default.string({
      required_error: "Product price is required",
    }),
    image: zod_1.default.string({
      required_error: "Product image is required",
    }),
    frameMaterial: zod_1.default.enum([...donation_constants_1.frameMaterial], {
      required_error: "frameMaterial is required",
    }),
    frameShape: zod_1.default.enum([...donation_constants_1.frameShape], {
      required_error: "frameShape is required",
    }),
    lensType: zod_1.default.enum([...donation_constants_1.lensType], {
      required_error: "lensType is required",
    }),
    brand: zod_1.default.string().optional(),
    gender: zod_1.default.enum([...donation_constants_1.gender], {
      required_error: "gender is required",
    }),
    color: zod_1.default.string().optional(),
  }),
});
const updatedonationZodSchema = zod_1.default.object({
  body: zod_1.default.object({
    name: zod_1.default
      .string({
        required_error: "Product name is required",
      })
      .optional(),
    price: zod_1.default
      .number({
        required_error: "Product price is required",
      })
      .optional(),
    quantity: zod_1.default
      .number({
        required_error: "Product price is required",
      })
      .optional(),
    image: zod_1.default
      .string({
        required_error: "Product image is required",
      })
      .optional(),
    frameMaterial: zod_1.default
      .enum([...donation_constants_1.frameMaterial], {
        required_error: "frameMaterial is required",
      })
      .optional(),
    frameShape: zod_1.default
      .enum([...donation_constants_1.frameShape], {
        required_error: "frameShape is required",
      })
      .optional(),
    lensType: zod_1.default
      .enum([...donation_constants_1.lensType], {
        required_error: "lensType is required",
      })
      .optional(),
    brand: zod_1.default.string().optional(),
    gender: zod_1.default
      .enum([...donation_constants_1.gender], {
        required_error: "gender is required",
      })
      .optional(),
    color: zod_1.default.string().optional(),
  }),
});
exports.donationValidation = {
  createdonationZodSchema,
  updatedonationZodSchema,
};
