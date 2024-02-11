import { Model } from "mongoose";
export interface Donator {
  type: string;
}
export type Idonation = {
  title: string;
  image: string;
  category: string;
  description: string;
  amount: string;
  collectedAmount: string;
  endDate: string;
  donators: Donator[];
};

export type DonationModel = Model<Idonation>;
export type IdonationFilters = {
  searchTerm?: string;
};
