import { Router } from "express";
import loginController from "../controllers/login.controllers.js";

const route = Router();

route.post("/login",loginController);

export default route;