import mongoose, { Schema } from "mongoose";

const favSchema = new mongoose.Schema({
    id:{
        type:String
    },
    original_title:{
        type:String
    },
    poster_path:{
        type:String
    }});

const UserSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require:true,
        },
        email:{
            type:String,
            require:true,
        },
        password:{
            type:String,
            require:true,
        },
        favorites:{
            type:[favSchema]
        }

    }, { timestamps: true }
)


const schema = mongoose.model("User", UserSchema);

export default schema;