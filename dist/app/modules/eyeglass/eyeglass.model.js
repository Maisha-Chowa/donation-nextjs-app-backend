"use strict";
var __awaiter =
  (this && this.__awaiter) ||
  function (thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P
        ? value
        : new P(function (resolve) {
            resolve(value);
          });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done
          ? resolve(result.value)
          : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.donationModel = void 0;
const mongoose_1 = require("mongoose");
const donation_constants_1 = require("./donation.constants");
const ApiError_1 = __importDefault(require("../../../errors/ApiError"));
const http_status_1 = __importDefault(require("http-status"));
const donationSchema = new mongoose_1.Schema(
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
      enum: donation_constants_1.frameMaterial,
    },
    frameShape: {
      type: String,
      required: true,
      enum: donation_constants_1.frameShape,
    },
    lensType: {
      type: String,
      required: true,
      enum: donation_constants_1.lensType,
    },
    brand: { type: String },
    gender: {
      type: String,
      required: true,
      enum: donation_constants_1.gender,
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
donationSchema.pre("save", function (next) {
  return __awaiter(this, void 0, void 0, function* () {
    const isExist = yield exports.donationModel.findOne({
      name: this.name,
      price: this.price,
    });
    if (isExist) {
      throw new ApiError_1.default(
        http_status_1.default.CONFLICT,
        "donation is already exist !!!"
      );
    }
    next();
  });
});
// create model
exports.donationModel = (0, mongoose_1.model)("donation", donationSchema);
