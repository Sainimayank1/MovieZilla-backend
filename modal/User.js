import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String
        },
        password:{
            type:String
        }

    }, { timestamps: true }
)


const schema = mongoose.model("User", UserSchema);

export default schema;