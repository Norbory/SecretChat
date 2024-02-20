import {connect} from "mongoose";

export const connectDB = async () => {
    try{
        await connect(process.env.MONGODB_URI);
        console.log("Database connected");
    }catch (error){
        console.error("Error connecting to database: ", error);
    }
};