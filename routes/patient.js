import express from "express"
import { deletePatient, editPatient, getAllPatient, getPatientDetail, insertPatient } from "../controller/patientC.js";


const pRouter = express.Router();

pRouter.get("/findAll",getAllPatient)
pRouter.put("/patient/:id",editPatient)
pRouter.delete("/patient/:id",deletePatient)
pRouter.get("/patient/:id",getPatientDetail)
pRouter.post("/patient",insertPatient)

//TO DO LATER

pRouter.get("/findpatientByName")
pRouter.get("/findpatientByCNE")



export default pRouter;