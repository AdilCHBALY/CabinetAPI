import express from "express"
import { getMedecin } from "../controller/medecinC.js";



const mRouter = express.Router();

mRouter.get("/getMedecin",getMedecin)



export default mRouter;