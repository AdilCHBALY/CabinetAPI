import db from "../cnx.js";

export const getMedecin=(req,res)=>{
    const q ="SELECT * FROM medecin"

    db.query(q,(err,data)=>{
        if(err) return res.err
        return res.json(data)
    })
}