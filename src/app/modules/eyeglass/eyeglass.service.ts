import { SortOrder } from "mongoose";
import { IGenericResponse } from "../../../interfaces/common";
import { eyeGlassSearchableFields } from "./eyeglass.constants";
import { IEyeGlass, IEyeGlassFilters } from "./eyeglass.interface";
import { eyeglassModel } from "./eyeglass.model";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import { IPaginationOptions } from "../../../interfaces/pagination";
import httpStatus from "http-status";
import ApiError from "../../../errors/ApiError";

const createEyeGlass = async (payload: IEyeGlass): Promise<IEyeGlass> => {
  const result = await eyeglassModel.create(payload);
  return result;
};

const getAllEyeGlass = async (
  filters: IEyeGlassFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IEyeGlass[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: eyeGlassSearchableFields.map((field) => ({
        [field]: {
          $regex: searchTerm,
          $options: "i",
        },
      })),
    });
  }

  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }
  const whereConditions =
    andConditions.length > 0
      ? {
          $and: andConditions,
        }
      : {};
  const result = await eyeglassModel
    .find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await eyeglassModel.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleEyeGlass = async (id: string): Promise<IEyeGlass | null> => {
  const result = await eyeglassModel.findById(id);
  return result;
};

const updateEyeGlass = async (
  id: string,
  payload: IEyeGlass
): Promise<IEyeGlass | null> => {
  const result = await eyeglassModel.findOneAndUpdate(
    {
      _id: id,
    },
    payload,
    {
      new: true,
    }
  );
  return result;
};
const deleteEyeGlass = async (id: string) => {
  const result = await eyeglassModel.findByIdAndDelete(id);
  // return result
};
export const eyeGlassService = {
  createEyeGlass,
  getAllEyeGlass,
  getSingleEyeGlass,
  updateEyeGlass,
  deleteEyeGlass,
};
