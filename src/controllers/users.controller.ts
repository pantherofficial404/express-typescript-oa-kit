import { Controller, Get, Route, Request, Security } from "tsoa";
import express from "express";
import { UserService } from "../services";

@Route("users")
export class UserController extends Controller {

  @Security("jwt")
  @Get("")
  async index(@Request() request: express.Request) {
    /**
     *  Retrive current logged in user info
     */
    return UserService.getUsers();
  }

  
}
