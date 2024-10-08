import { response } from "express";
import { prismaClient } from "../application/database";
import { ResponseError } from "../error/response-error";
import { CreateUserRequest, LoginUserRequest, toUserResponse, UserResponse } from "../model/user-model";
import { UserValidation } from "../validation/user.validation";
import { Validation } from "../validation/validation";
import bcrypt from "bcrypt";
import {v4 as uuid} from "uuid";
export class UserService {
  static async register(request: CreateUserRequest) : Promise<UserResponse>{
    const registerRequest = Validation.validation(UserValidation.Register, request)

    const totalUserWithSameUsername = await prismaClient.user.count({
      where: {
        username: registerRequest.username
      }
    })

    if(totalUserWithSameUsername != 0 ){
      throw new ResponseError(400, "Username already exist");
    }

    registerRequest.password = await bcrypt.hash(registerRequest.password, 10);

    const user = await prismaClient.user.create({
      data: registerRequest
    })
    return toUserResponse(user)
  }

  static async login(request: LoginUserRequest): Promise<UserResponse> {
    const loginUserRequest = Validation.validation(UserValidation.Login, request)

    let user = await prismaClient.user.findUnique({
      where:{
        username: loginUserRequest.username
      }
    })

    if(!user){
      throw new ResponseError(401, "Username or Password wrong found")
    }

    const isPasswordValid = await bcrypt.compare(loginUserRequest.password, user.password)
    if(!isPasswordValid){
      throw new ResponseError(401, "Username or Password wrong found")
    }

    user = await prismaClient.user.update({
      where: {
        username: loginUserRequest.username
      },
      data: {
        token: uuid()
      }
    })
    const response =  toUserResponse(user)
    response.token = user.token!
    return response
  }

}