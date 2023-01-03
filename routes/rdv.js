import express from "express"
import { addrdv, deleterdv, editrdv, findAll, getRdv } from "../controller/rdvC.js";



const rRouter = express.Router();


rRouter.get("/allRDV",findAll)
rRouter.get("/getrdv/:id",getRdv)
rRouter.put("/rdv/:id",editrdv)
rRouter.delete("/rdv/:id",deleterdv)
rRouter.post("/rdv",addrdv)



export default rRouter;