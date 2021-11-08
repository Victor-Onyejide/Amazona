import  mongoose  from "mongoose";
// // const mongoose = require('')

// import pkg from 'mongoose';
// const { mongoose } = pkg;

const userSchema = new mongoose.Schema({
    name : {type: String, required:true},
    email:{type: String, required:true, unique:true},
    password: {type:String, required:true},
    isAdmin: { type: Boolean, default: false, required: true},
},
{
    timestamps:true,
}

);

const User = mongoose.model("User", userSchema);
export default User;