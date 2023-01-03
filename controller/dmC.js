import db from "../cnx.js"

export const findAll=(req,res)=>{
    const q ="SELECT p.CNE,p.Email,p.age,p.fname as pfname,p.lname as plname,p.phone,d.*,m.fname,m.lname,m.type FROM patient p,dossiermedical d,medecin m WHERE d.medecin_id=m.id AND p.id=d.patient_id"

    const all_data=[]


    db.query(q,(err,data)=>{
        if(err) return res.err
        let i = 0
        data.forEach(el => {
            all_data[i]={
                "id" : data[i].id,
                "dateCreation" : data[i].dateCreation,
                "observation" : data[i].observation,
                "Patient" : {
                    "pid" : data[i].patient_id,
                    "pCNE": data[i].CNE,
                    "pfname" : data[i].pfname,
                    "plname" : data[i].plname,
                    "phone" : data[i].phone,
                    "page":data[i].age,
                    "pEmail" : data[i].Email
                },
                "Medecin" : {
                    "mfname" : data[i].fname,
                    "mlname" : data[i].lname,
                    "mtype" : data[i].type,
                }
        }
        i++
        });

        return res.json(all_data)
    })
}

export const getDM=(req,res)=>{
    const DMID=req.params.id
    const q ="SELECT * FROM dossiermedical WHERE id = ?"


    db.query(q,(err,data)=>{
        if(err) return res.err
        return res.json(data)
    })
}


export const addDM=(req,res)=>{
    const q ="INSERT INTO dossiermedical (`dateCreation`,`observation`,`medecin_id`,`patient_id`) VALUES(?)"
    const values=[
        req.body.DATECREATION,
        res.body.OBSERVATION,
        res.body.MEDIC_ID,
        res.body.PATIENT_ID
    ]



    db.query(q,[values],(err,data)=>{
        if(err) return res.err
        return res.json("Dossier Medical Added")
    })
}


export const deleteDM=(req,res)=>{
    const DMID=req.params.id
    const q = "DELETE FROM dossiermedical WHERE id = ?"

    db.query(q,[DMID],(err,data)=>{
        if(err) return res.err
        return res.json("Dossier Medical Deleted")
    })
}

export const editDM=(req,res)=>{
    const DMID=req.params.id

    const q = "UPDATE dossiermedical SET `observation` = ? WHERE id = ?"

    const value = [
        req.body.OBSERVATION
    ]

    db.query(q,[value],(err,data)=>{
        if(err) return res.err
        return res.json("Dossier Medical Modified")

    })


}