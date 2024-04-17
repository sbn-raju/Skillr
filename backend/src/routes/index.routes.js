import { Router } from "express";
import indexController from "../controllers/index.controllers.js";

const route = Router();
route.get("/",indexController);

export default route