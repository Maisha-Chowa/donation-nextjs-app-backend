import { Schema, model } from "mongoose";
import { ISalesManagement, SalesManagement } from "./salesManagement.interface";

const SalesManagementSchema = new Schema<ISalesManagement>({
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

export const SalesManagementModel = model<ISalesManagement, SalesManagement>(
  "SalesManagement",
  SalesManagementSchema
);
