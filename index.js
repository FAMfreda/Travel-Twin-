import express from "express";
import { dbConnection } from "./config/db.js";


//create server
const app = express()


//create Database
dbConnection()


//create port
const port = process.env.PORT|| 7070


//create app is listening
app.listen(port, () => {
    console.log (` Your app is listening on port ${port}`)
})

