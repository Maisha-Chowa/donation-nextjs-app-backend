import { Model } from "mongoose";

export type ISalesManagement = {
  QuantityOfTheProduct: string;
  NameOfTheBuyer: string;
  DateOfTheSale: string;
};

export type SalesManagement = Model<ISalesManagement>;
