export interface DonationID {
  type: string;
}
export interface IUser {
  username: string;
  email: string;
  password: string;
  role: "admin" | "user";
  donatedAmount: string;
  donations: DonationID;
}
