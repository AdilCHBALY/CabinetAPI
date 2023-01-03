import db from "../cnx.js"



export const getAssistant=(req,res)=>{
    const q ="SELECT * FROM assistant"


    db.query(q,(err,data)=>{
        if(err) return res.err
        return res.json(data)
    })
}