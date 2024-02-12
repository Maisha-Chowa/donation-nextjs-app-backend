import express from "express";
import { UserRoutes } from "../modules/user/user.route";
import { donationRoutes } from "../modules/donation/donation.route";
import { AuthRoutes } from "../modules/auth/auth.route";
const router = express.Router();
const routes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/donation",
    route: donationRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
];

routes.forEach((route) => router.use(route.path, route.route));

export default router;
