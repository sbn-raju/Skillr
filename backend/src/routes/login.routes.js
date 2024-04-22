import { Router } from "express";
import loginController from "../controllers/login.controllers.js";

const route = Router();

route.post("/api/login",loginController);

export default route;