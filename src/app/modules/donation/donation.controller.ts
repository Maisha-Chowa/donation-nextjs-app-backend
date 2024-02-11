import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { Idonation } from "./donation.interface";
import httpStatus from "http-status";
import { donationService } from "./donation.service";
import pick from "../../../shared/pick";
import { donationSearchableFields } from "./donation.constants";
import { paginationFields } from "../../../constants/pagination";

const createdonation = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await donationService.createdonation(data);

  sendResponse<Idonation>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "donation created successfully",
    data: result,
  });
});

const getAlldonation = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, donationSearchableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await donationService.getAlldonation(
    filters,
    paginationOptions
  );

  sendResponse<Idonation[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "donation retrieved successfully",
    meta: result.meta,
    data: result.data,
  });
});
const getSingledonation = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await donationService.getSingledonation(id);

  sendResponse<Idonation>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "donation retrieved successfully !",
    data: result,
  });
});

const updatedonation = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;
  const result = await donationService.updatedonation(id, updateData);

  sendResponse<Idonation>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "donation updated successfully !",
    data: result,
  });
});

const deletedonation = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await donationService.deletedonation(id);

  sendResponse<Idonation>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "donation deleted successfully !",
    //data: result,
  });
});
export const donationController = {
  createdonation,
  getAlldonation,
  getSingledonation,
  updatedonation,
  deletedonation,
};
