import z, { string } from "zod";

const createdonationZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Donation Title is required",
    }),
    image: z.string({
      required_error: "Donation image is required",
    }),
    category: z.string({
      required_error: "Donation category is required",
    }),
    description: z.string({
      required_error: "Donation description is required",
    }),
    amount: z.string({
      required_error: "Donation  amount is required",
    }),
  }),
});

const updatedonationZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    amount: z.string().optional(),
  }),
});

export const donationValidation = {
  createdonationZodSchema,
  updatedonationZodSchema,
};
