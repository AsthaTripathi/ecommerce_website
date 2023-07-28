
import mongoose from "mongoose";


export const Connection = async (URL) => {
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected Successfully');
    }
    catch (error){
        console.log('Error while connecting with the database', error.message);
    }
}


export default Connection;