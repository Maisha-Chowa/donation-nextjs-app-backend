import { SortOrder } from "mongoose";
import { IGenericResponse } from "../../../interfaces/common";
import { donationSearchableFields } from "./donation.constants";
import { Idonation, IdonationFilters } from "./donation.interface";
import { donationModel } from "./donation.model";
import { paginationHelpers } from "../../../helpers/paginationHelpers";
import { IPaginationOptions } from "../../../interfaces/pagination";
import { getDonationCollectedAMount } from "./donation.utils";

const createdonation = async (payload: Idonation): Promise<Idonation> => {
  payload.collectedAmount = "0";
  const result = await donationModel.create(payload);
  return result;
};

const getAlldonation = async (
  filters: IdonationFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<Idonation[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: donationSearchableFields.map((field) => ({
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
  const result = await donationModel
    .find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);

  const total = await donationModel.countDocuments();

  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingledonation = async (id: string): Promise<Idonation | null> => {
  const result = await donationModel.findById(id);
  return result;
};

const updatedonation = async (
  id: string,
  payload: Idonation
): Promise<Idonation | null> => {
  const result = await donationModel.findOneAndUpdate(
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
const deletedonation = async (id: string) => {
  const result = await donationModel.findByIdAndDelete(id);
  // return result
};
export const donationService = {
  createdonation,
  getAlldonation,
  getSingledonation,
  updatedonation,
  deletedonation,
};
