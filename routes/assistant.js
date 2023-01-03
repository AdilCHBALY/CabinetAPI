import express from "express"
import { getAssistant } from "../controller/assistantC.js";


const aRouter = express.Router();

aRouter.get("/getAssistant",getAssistant)



export default aRouter;