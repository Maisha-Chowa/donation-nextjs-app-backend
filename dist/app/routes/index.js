"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_route_1 = require("../modules/user/user.route");
const donation_route_1 = require("../modules/donation/donation.route");
const salesManagement_route_1 = require("../modules/salesManagement/salesManagement.route");
const auth_route_1 = require("../modules/auth/auth.route");
const router = express_1.default.Router();
const routes = [
    {
        path: "/user",
        route: user_route_1.UserRoutes,
    },
    {
        path: "/donation",
        route: donation_route_1.donationRoutes,
    },
    {
        path: '/auth',
        route: auth_route_1.AuthRoutes,
    },
    {
        path: "/salesManagement",
        route: salesManagement_route_1.salesManagementRoutes,
    },
];
routes.forEach((route) => router.use(route.path, route.route));
exports.default = router;
