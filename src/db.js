// Purpose: Connect to the database.
import {connect} from "mongoose";
import {MONGODB_URI} from "./config";

export const connectDB = async () => {
    try{
        await connect(MONGODB_URI);
        console.log("Database connected");
    }catch (error){
        console.error("Error connecting to database: ", error);
    }
};