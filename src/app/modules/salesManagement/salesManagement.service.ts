import { IGenericResponse } from "../../../interfaces/common";
import { ISalesManagement } from "./salesManagement.interface";
import { SalesManagementModel } from "./salesManagement.model";

const createSales = async (
  salesData: ISalesManagement
): Promise<ISalesManagement | null> => {
  const result = await SalesManagementModel.create(salesData);
  return result;
};
const getAllSales = async (): Promise<IGenericResponse<ISalesManagement[]>> => {
  const result = await SalesManagementModel.find();
  const total = await SalesManagementModel.countDocuments();
  return {
    meta: {
      page: 1,
      limit: 10,
      total,
    },
    data: result,
  };
};
export const salesManagementService = {
  createSales,
  getAllSales,
};
