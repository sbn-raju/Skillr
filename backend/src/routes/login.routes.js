import { Router } from "express";
import {studentLoginController, facultyLoginController} from "../controllers/login.controllers.js";


const loginroute = Router();

loginroute.post("/api/studentLogin",studentLoginController);
loginroute.post("/api/facultyLogin", facultyLoginController);

export default loginroute;