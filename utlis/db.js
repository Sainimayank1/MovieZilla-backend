import mongoose from "mongoose"
mongoose.set('strictQuery', true);
const connect = async () => {
    
    try {
        //          TRY TO CONNECT TO DATABASE
        const res = await mongoose.connect("mongodb+srv://mayanksaini4455:k4HqZiQb1TQAw4HB@cluster0.ksix24d.mongodb.net/?retryWrites=true&w=majority",
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                writeConcern: {
                    w: 'majority',
                    j: true,
                    wtimeout: 1000
                }
            })
        if (res)
            console.log("Connect to database")

    } catch (error) {
        console.log(error)
    }
}

export default connect;