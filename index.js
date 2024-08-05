import express from "express";
import { dbConnection } from "./config/db.js";
import mongoose from "mongoose";
import userRouter from "./router/user_router.js";


//create server
const app = express()


//create Database
dbConnection()

// use middleware
app.use(express.json ())

//use router
app.use(userRouter)


//create port
const port = process.env.PORT|| 7070


//create app is listening
app.listen(port, () => {
    console.log (` Your app is listening on port ${port}`)
})

