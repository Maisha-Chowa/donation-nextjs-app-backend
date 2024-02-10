import { Model } from "mongoose";

export type Idonation = {
  title: string;
  image: string;
  category: string;
  description: string;
  amount: string;
};

export type DonationModel = Model<Idonation>;
export type IdonationFilters = {
  searchTerm?: string;
};
