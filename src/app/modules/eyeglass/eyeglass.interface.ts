import { Model } from "mongoose";

export type IFrameMaterial = "metal" | "plastic" | "acetate";
export type IFrameShape = "rectangular" | "round" | "cat-eye";
export type ILensType = "single-vision" | "bifocal" | "progressive";
export type IGender = "men" | "women" | "unisex";

export type IEyeGlass = {
  name: string;
  price: string;
  quantity: string;
  image:String;
  frameMaterial: IFrameMaterial;
  frameShape: IFrameShape;
  lensType: ILensType;
  brand: String;
  gender: IGender;
  color: String;
};

export type EyeGlassModel = Model<IEyeGlass>;
export type IEyeGlassFilters = {
  searchTerm?: string;
};

// Filterable Fields
// Frame Material ["metal", "plastic", "acetate"]
// Frame Shape:** with specific shapes  [ "rectangular", "round", "cat-eye" ]
// Lens Type: ["single-vision", "bifocal", "progressive"]
// Brand:
// Price Range:
// Gender:["men", "women", "unisex"]
// color
