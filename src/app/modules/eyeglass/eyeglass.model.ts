import { Schema, model } from "mongoose";
import { IEyeGlass, EyeGlassModel } from "./eyeglass.interface";
import {
  frameMaterial,
  frameShape,
  gender,
  lensType,
} from "./eyeglass.constants";
import ApiError from "../../../errors/ApiError";
import httpStatus from "http-status";

const eyeGlassSchema = new Schema<IEyeGlass>(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    quantity: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    frameMaterial: {
      type: String,
      required: true,
      enum: frameMaterial,
    },
    frameShape: {
      type: String,
      required: true,
      enum: frameShape,
    },
    lensType: {
      type: String,
      required: true,
      enum: lensType,
    },
    brand: { type: String },
    gender: {
      type: String,
      required: true,
      enum: gender,
    },
    color: { type: String },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

eyeGlassSchema.pre("save", async function (next) {
  const isExist = await eyeglassModel.findOne({
    name: this.name,
    price: this.price,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      "eyeglass is already exist !!!"
    );
  }
  next();
});

// create model

export const eyeglassModel = model<IEyeGlass, EyeGlassModel>(
  "eyeGlass",
  eyeGlassSchema
);
