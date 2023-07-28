import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstname: {
        type:String,
        trim:true,
        min:5,
        max:20,
        required:true
    },
    lastname: {
        type:String,
        trim:true,
        min:5,
        max:20,
        required:true
    },
    username: {
        type:String,
        trim:true,
        required:true,
        unique:true,
        index:true,
        lowercase:true
    },
    email:{
        type:String,
        trim:true,
        required:true,
        unique:true,
        lowercase:true

    },
    password:{
        type:String,
        required:true,

    },
    phone:{
        type:String,
        required:true
    }
});

const user = mongoose.model('user', userSchema);

export default user;