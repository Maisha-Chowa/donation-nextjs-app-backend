import httpStatus from "http-status";

import { TLoginUser } from "./auth.interface";
import { User } from "../user/user.model";
import ApiError from "../../../errors/ApiError";
import { bcryptHelper } from "../../../shared/bycryptHelper";

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  const user = await User.findOne({
    email: payload.email,
  });

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "This user is not found !");
  }

  const isPasswordMatched = await bcryptHelper.isPasswordMatched(
    payload?.password,
    user?.password
  );
  if (!isPasswordMatched) {
    throw new ApiError(httpStatus.FORBIDDEN, "Password do not matched");
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, no-unused-vars
  const { password, ...restUserInfo } = user.toJSON();

  return restUserInfo;
};

export const AuthServices = {
  loginUser,
};
