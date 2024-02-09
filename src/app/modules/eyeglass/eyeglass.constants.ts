import {
  IFrameMaterial,
  IFrameShape,
  IGender,
  ILensType,
} from "./eyeglass.interface";

export const frameMaterial: IFrameMaterial[] = ["metal", "plastic", "acetate"];
export const frameShape: IFrameShape[] = ["rectangular", "round", "cat-eye"];
export const lensType: ILensType[] = [
  "single-vision",
  "bifocal",
  "progressive",
];
export const gender: IGender[] = ["men", "women", "unisex"];

export const eyeGlassSearchableFields = ["price",
"frameMaterial",
"frameShape",
"lensType",
"brand",
"gender",
"color"];

export const eyeGlassFilterableFields = [
  "searchTerm",
  "price",
  "frameMaterial",
  "frameShape",
  "lensType",
  "brand",
  "gender",
  "color",
];
