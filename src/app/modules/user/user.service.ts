import { IUser } from "./user.interface";
import { User } from "./user.model";

const createUser = async (user: IUser): Promise<IUser | null> => {
  // set role
  user.role = "admin";
  const result = await User.create(user);
  return result;
};

export const userService = {
  createUser,
};
