import mongoose from "mongoose";
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    email: {type: str}
})
 
