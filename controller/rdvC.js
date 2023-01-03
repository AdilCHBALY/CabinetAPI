import db from "../cnx.js"


export const getRdv = (req,res)=>{
    const RDVID = req.params.id
    const q = "SELECT * FROM rdv WHERE rid = ?"


    db.query(q,[RDVID],(err,data)=>{
        if(err) return res.err
        return res.json(data)
    })

}


export const findAll=(req,res)=>{
    const q = "SELECT * FROM rdv"


    db.query(q,(err,data)=>{
        if(err) return res.err
        return res.json(data)
    })

}


export const addrdv=(req,res)=>{
    const q ="INSERT INTO rdv (`rid`,`FinishRdv`,`RdvDate`,`StartRdv`,`Status`,`assistant_id`,`patient_id`) VALUES (?)"

    const values=[
        req.body.RID,
        req.body.FINISHRDV,
        req.body.RDVDATE,
        req.body.STARTRDV,
        req.body.STATUS,
        req.body.ASSISTANTID,
        req.body.PATIENTID
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.err
        return res.json("RDV Added")
    })
}


export const deleterdv=(req,res)=>{
    const RDVID=req.params.id
    const q =" DELETE FROM rdv WHERE rid=?"



    db.query(q,(err,data)=>{
        if(err) return res.err
        return res.json("RDV Deleted")
    })
}



export const editrdv=(req,res)=>{
    const RDVID= req.params.id
    const q ="UPDATE rdv SET `FinishRdv`=?,`RdvDate`=?,`StartRdv`=?,`Status`=?,`assistant_id`=?,`patient_id`=?"

    const values=[
        req.body.FINISHRDV,
        req.body.RDVDATE,
        req.body.STARTRDV,
        req.body.STATUS,
        req.body.ASSISTANTID,
        req.body.PATIENTID
    ]

    db.query(q,[...values,RDVID],(err,data)=>{
        if(err) return res.json(err)
        return res.json("RDV Modified")
    })


}