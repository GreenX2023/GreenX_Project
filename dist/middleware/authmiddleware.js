"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
require("dotenv/config");
const UserModel = require('../models/User.model');
// interface AuthRequest extends express.Request {
//   userId?: string;
//   userRole?:string
// }
const authMiddleware = async ({ context }, next) => {
    var _a;
    const token = (_a = context.req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    if (!token) {
        throw new Error("Please provide AUTH TOKEN");
    }
    try {
        let serverToken = await UserModel.findOne({
            token
        });
        if (!serverToken) {
            throw new Error("Token Expired or Invalid");
        }
        const payload = (0, jsonwebtoken_1.verify)(token, process.env.JWT_SECRET || "secretkey");
        context.req.userId = payload.userId;
        context.req.userRole = payload.userRole;
    }
    catch (err) {
        throw new Error(err);
    }
    return next();
};
exports.authMiddleware = authMiddleware;
//# sourceMappingURL=authmiddleware.js.map