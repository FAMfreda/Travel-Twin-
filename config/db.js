import mongoose from "mongoose";
import 'dotenv/config'

//declare db

const connectionString = process.env.mongo_url




//call the db for use 
export const dbConnection= ()=> {
    mongoose.connect(connectionString).then( () => {
        console.log ('database connected succesfully')
    })
}