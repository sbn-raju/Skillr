import { Router } from "express";
import registerController from "../controllers/register.controllers.js";
const route = Router();

route.post("/register",registerController);

export default route;