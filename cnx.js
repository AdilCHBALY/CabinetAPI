import mysql from "mysql"
import * as dotenv from 'dotenv'

dotenv.config()


const db=mysql.createConnection({
    host : "localhost",
    user: process.env.DATABASE_USERNAME,
    password :process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
})



export default db