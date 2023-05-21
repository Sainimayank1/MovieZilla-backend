import mongoose, { Schema } from "mongoose";

const NewsSchema = new mongoose.Schema(
    {
        title: {
            type: String
        },
        data: {
            type: String
        }

    }, { timestamps: true }
)


const schema = mongoose.model("News", NewsSchema);

export default schema;