import { Model } from "mongoose";

export type IUser = {
  role: string;
  email: string;
  password: string;
};

export type UserModel = Model<IUser>;
