import { Schema,model,models } from "mongoose";

const UserSchema=new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

export default models.User || model('User',UserSchema)
