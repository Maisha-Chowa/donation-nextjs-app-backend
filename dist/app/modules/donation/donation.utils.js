"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDonationCollectedAMount = void 0;
const donation_model_1 = require("./donation.model");
const getDonationCollectedAMount = () => {
    donation_model_1.donationModel.find({}, { _id: 0, collectedAmount: 1 }).then((data) => {
        console.log(data);
        return data;
    });
};
exports.getDonationCollectedAMount = getDonationCollectedAMount;
