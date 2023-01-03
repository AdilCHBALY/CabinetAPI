import db from "../cnx.js";

export const getAllPatient  = (req,res)=>{
    const q ="SELECT * FROM patient";

    db.query(q,(err,data)=>{
        if(err) return res.err
        return res.json(data)
    })
}

export const getPatientDetail=(req,res)=>{
    const PatientID=req.params.id
    const q ="SELECT * FROM patient WHERE id = ?"


    db.query(q,[PatientID],(err,data)=>{
        if(err) return res.err
        return res.json(data)
    })
}

export const editPatient=(req,res)=>{
    const PatientID=req.params.id
    const q ="UPDATE patient SET `CNE`=?,`Email`=?,`age`=?,`fname`=?,`lname`=?,`phone`=? WHERE id = ?"

    const values = [
        req.body.CNE,
        req.body.EMAIL,
        req.body.AGE,
        req.body.FNAME,
        req.body.LNAME,
        req.body.PHONE,
    ]

    db.query(q,[...values,PatientID],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Patient Modified")
    })

}

export const deletePatient=(req,res)=>{
    const PatientID=req.params.id
    const q ="DELETE FROM patient WHERE id = ?"

    db.query(q,[PatientID],(err,data)=>{
        if(err) return res.json(err)
        return res.json("Patient Deleted Succesfully")
    })


}

export const insertPatient = (req,res)=>{
    const q = "INSERT INTO patient (`CNE`,`Email`,`age`,`fname`,`lname`,`phone`) VALUES (?)";
    const values = [
        req.body.CNE,
        req.body.EMAIL,
        req.body.AGE,
        req.body.FNAME,
        req.body.LNAME,
        req.body.PHONE,
    ]

    db.query(q,[values],(err,data)=>{
        if(err) return res.err
        return res.json("Patient Added Succefully")
    })
    
}