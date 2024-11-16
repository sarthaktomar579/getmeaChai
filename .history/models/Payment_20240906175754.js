import mongoose from "mongoose";
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    name: {type: string, required: true},
    to_user: {type: string, required: true},
    oid: {type: string},
    profilepic: {type: string},
    createdAt: {type: data, default: Date.now},
    updatedAt: {type: data, default: Date.now},
})
 
const User = model("User", UserSchema);
export default mongoose.models.User || User;