"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.eyeGlassService = void 0;
const eyeglass_constants_1 = require("./eyeglass.constants");
const eyeglass_model_1 = require("./eyeglass.model");
const paginationHelpers_1 = require("../../../helpers/paginationHelpers");
const createEyeGlass = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield eyeglass_model_1.eyeglassModel.create(payload);
    return result;
});
const getAllEyeGlass = (filters, paginationOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { searchTerm } = filters, filtersData = __rest(filters, ["searchTerm"]);
    const { page, limit, skip, sortBy, sortOrder } = paginationHelpers_1.paginationHelpers.calculatePagination(paginationOptions);
    const andConditions = [];
    if (searchTerm) {
        andConditions.push({
            $or: eyeglass_constants_1.eyeGlassSearchableFields.map((field) => ({
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
    const sortConditions = {};
    if (sortBy && sortOrder) {
        sortConditions[sortBy] = sortOrder;
    }
    const whereConditions = andConditions.length > 0
        ? {
            $and: andConditions,
        }
        : {};
    const result = yield eyeglass_model_1.eyeglassModel
        .find(whereConditions)
        .sort(sortConditions)
        .skip(skip)
        .limit(limit);
    const total = yield eyeglass_model_1.eyeglassModel.countDocuments();
    return {
        meta: {
            page,
            limit,
            total,
        },
        data: result,
    };
});
const getSingleEyeGlass = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield eyeglass_model_1.eyeglassModel.findById(id);
    return result;
});
const updateEyeGlass = (id, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield eyeglass_model_1.eyeglassModel.findOneAndUpdate({
        _id: id,
    }, payload, {
        new: true,
    });
    return result;
});
const deleteEyeGlass = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield eyeglass_model_1.eyeglassModel.findByIdAndDelete(id);
    // return result
});
exports.eyeGlassService = {
    createEyeGlass,
    getAllEyeGlass,
    getSingleEyeGlass,
    updateEyeGlass,
    deleteEyeGlass,
};
