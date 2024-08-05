import express from "express";
import { dbConnection } from "./config/db.js";
import mongoose from "mongoose";
import userRouter from "./router/user_router.js";
import expressOasGenerator from "@mickeymond/express-oas-generator";


//create server
const app = express()


expressOasGenerator.handleResponses(app, {
    alwaysServeDocs: true,
    tags: [],
    mongooseModels: mongoose.modelNames(),
});

//create Database
dbConnection()

// use middleware
app.use(express.json ())

//use router
app.use(userRouter)

//swagger Api Doc generator
expressOasGenerator.handleRequests();
app.use((req, res) => res.redirect('/api-docs/'));
//error handler in use
// app.use(errorHandler({ log: false }));


//create port
const port = process.env.PORT|| 7070


//create app is listening
app.listen(port, () => {
    console.log (` Your app is listening on port ${port}`)
})

