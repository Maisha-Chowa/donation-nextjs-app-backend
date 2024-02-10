import { Schema, model } from "mongoose";
import { DonationModel, Idonation } from "./donation.interface";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

const donationSchema = new Schema<Idonation>(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

donationSchema.pre("save", async function (next) {
  const isExist = await donationModel.findOne({
    title: this.title,
  });
  if (isExist) {
    throw new ApiError(httpStatus.CONFLICT, "donation is already exist !!!");
  }
  next();
});

// create model

export const donationModel = model<Idonation, DonationModel>(
  "donation",
  donationSchema
);
