import express from "express"
import { addDM, deleteDM, editDM, findAll, getDM } from "../controller/dmC.js";



const dRouter = express.Router();


dRouter.get("/findAll",findAll)
dRouter.get("/DM/:id",getDM)
dRouter.put("/DM/:id",editDM)
dRouter.delete("/DM/:id",deleteDM)
dRouter.post("/DM",addDM)



export default dRouter;