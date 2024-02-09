import { Request, Response } from "express";
import httpStatus from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { salesManagementService } from "./salesManagement.service";
import { ISalesManagement } from "./salesManagement.interface";

const createSales = catchAsync(
  async (req: Request, res: Response) => {
    const data = req.body;
    console.log(data);
    const result = await salesManagementService.createSales(data);

    sendResponse<ISalesManagement>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Sales created successfully!",
      data: result,
    });
  }
);
const getAllSales= catchAsync(
  async (req: Request, res: Response) => {
    const result = await salesManagementService.getAllSales();
    sendResponse<ISalesManagement[]>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Sales created successfully!",
      meta: result.meta,
      data: result.data,
    });
  }
);

export const salesManagementController = {
  createSales,
  getAllSales,
};
