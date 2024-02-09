import z, { string } from "zod";
import {
  frameMaterial,
  frameShape,
  gender,
  lensType,
} from "./eyeglass.constants";
const createEyeGlassZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Product name is required",
    }),
    price: z.string({
      required_error: "Product price is required",
    }),
    quantity: z.string({
      required_error: "Product price is required",
    }),
    image: z.string({
      required_error: "Product image is required",
    }),
    frameMaterial: z.enum([...frameMaterial] as [string, ...string[]], {
      required_error: "frameMaterial is required",
    }),
    frameShape: z.enum([...frameShape] as [string, ...string[]], {
      required_error: "frameShape is required",
    }),
    lensType: z.enum([...lensType] as [string, ...string[]], {
      required_error: "lensType is required",
    }),
    brand: z.string().optional(),
    gender: z.enum([...gender] as [string, ...string[]], {
      required_error: "gender is required",
    }),
    color: z.string().optional(),
  }),
});

const updateEyeGlassZodSchema = z.object({
  body: z.object({
    name: z
      .string({
        required_error: "Product name is required",
      })
      .optional(),
    price: z
      .number({
        required_error: "Product price is required",
      })
      .optional(),
    quantity: z
      .number({
        required_error: "Product price is required",
      })
      .optional(),
    image: z
      .string({
        required_error: "Product image is required",
      })
      .optional(),
    frameMaterial: z
      .enum([...frameMaterial] as [string, ...string[]], {
        required_error: "frameMaterial is required",
      })
      .optional(),
    frameShape: z
      .enum([...frameShape] as [string, ...string[]], {
        required_error: "frameShape is required",
      })
      .optional(),
    lensType: z
      .enum([...lensType] as [string, ...string[]], {
        required_error: "lensType is required",
      })
      .optional(),
    brand: z.string().optional(),
    gender: z
      .enum([...gender] as [string, ...string[]], {
        required_error: "gender is required",
      })
      .optional(),
    color: z.string().optional(),
  }),
});

export const eyeGlassValidation = {
  createEyeGlassZodSchema,
  updateEyeGlassZodSchema,
};
