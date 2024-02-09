import { z } from "zod";

const createSalesZodSchema = z.object({
  body: z.object({
    QuantityOfTheProduct: z.string({
      required_error: "QuantityOfTheProduct is required",
    }),
    NameOfTheBuyer: z.string({
      required_error: "NameOfTheBuyer is required",
    }),
    DateOfTheSale: z.string({
      required_error: "DateOfTheSale is required",
    }),
  }),
});

export const SalesValidation = {
  createSalesZodSchema,
};
