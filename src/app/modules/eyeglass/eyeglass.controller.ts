import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
import { IEyeGlass } from "./eyeglass.interface";
import httpStatus from "http-status";
import { eyeGlassService } from "./eyeglass.service";
import pick from "../../../shared/pick";
import { eyeGlassSearchableFields } from "./eyeglass.constants";
import { paginationFields } from "../../../constants/pagination";

const createEyeGlass = catchAsync(async (req: Request, res: Response) => {
  const data = req.body;
  const result = await eyeGlassService.createEyeGlass(data);

  sendResponse<IEyeGlass>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "eye glass created successfully",
    data: result,
  });
});

const getAllEyeGlass = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, eyeGlassSearchableFields);
  const paginationOptions = pick(req.query, paginationFields);
  const result = await eyeGlassService.getAllEyeGlass(
    filters,
    paginationOptions
  );

  sendResponse<IEyeGlass[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Eye Glass retrieved successfully",
    meta: result.meta,
    data: result.data,
  });
});
const getSingleEyeGlass = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await eyeGlassService.getSingleEyeGlass(id);

  sendResponse<IEyeGlass>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Eye Glass retrieved successfully !",
    data: result,
  });
});

const updateEyeGlass = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const updateData = req.body;
  const result = await eyeGlassService.updateEyeGlass(id, updateData);

  sendResponse<IEyeGlass>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "EyeGlass updated successfully !",
    data: result,
  });
});

const deleteEyeGlass = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await eyeGlassService.deleteEyeGlass(id);

  sendResponse<IEyeGlass>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Eye Glass deleted successfully !",
    //data: result,
  });
});
export const eyeGlassController = {
  createEyeGlass,
  getAllEyeGlass,
  getSingleEyeGlass,
  updateEyeGlass,
  deleteEyeGlass,
};
