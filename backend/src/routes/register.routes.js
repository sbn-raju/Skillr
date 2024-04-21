import { Router } from "express";
import {studentRegisterController, facultyRegisterController} from "../controllers/register.controllers.js";


const route = Router();

//Student Route
route.post("/api/studentRegister",studentRegisterController);
//Faculty Route
route.post("/api/facultyRegister",facultyRegisterController);

export default route;