import express from "express"

import cors from "cors"
import pRouter from "./routes/patient.js"
import aRouter from "./routes/assistant.js";
import rRouter from "./routes/rdv.js";
import dRouter from "./routes/dm.js";
import mRouter from "./routes/medecin.js";


const app=express()




//for Auth Problem
//ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<Password>';

app.use(express.json());
app.use(cors())



app.use("/api/vp",pRouter)
app.use("/api/va",aRouter)
app.use("/api/vm",mRouter)
app.use("/api/vr",rRouter)
app.use("/api/vd",dRouter)


app.listen(8800,()=>{
    console.log("Connected to Backend :D")
});