import { donationModel } from "./donation.model";

export const getDonationCollectedAMount = () => {
  donationModel.find({}, { _id: 0, collectedAmount: 1 }).then((data) => {
    console.log(data);
    return data;
  });
};
