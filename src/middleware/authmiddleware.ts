import { verify } from "jsonwebtoken";
import "dotenv/config";
import express from "express";
const UserModel = require('../models/User.model')
import { MiddlewareFn } from "type-graphql";
import { Request } from "express";

interface MyContext {
  req: Request & { userId?: string,userRole?:string };
}
interface AuthToken {
  userId: string;
  userRole:string
}

// interface AuthRequest extends express.Request {
//   userId?: string;
//   userRole?:string
// }

export const authMiddleware: MiddlewareFn<MyContext> = async({context }, next: express.NextFunction) => {
  const token = context.req.headers.authorization?.split(" ")[1];
  if (!token) {
   throw new Error("Please provide AUTH TOKEN")
  }

  try {
    let serverToken=await UserModel.findOne({
      token
    })

    if(!serverToken){
      throw new Error("Token Expired or Invalid")
    }
    const payload = verify(token, process.env.JWT_SECRET || "secretkey") as AuthToken;
    context.req.userId = payload.userId;
    context.req.userRole=payload.userRole;
   
  } catch (err) {
   throw new Error(err)
  }

 return next();
};


