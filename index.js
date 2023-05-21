import connect from "./utlis/db.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import News from "./modal/News.js"
import CMB from "./modal/CMB.js"
import Cookies from "./modal/Cookies.js"
import HC from "./modal/HC.js"
import RBread from "./modal/RBread.js"
import SBread from "./modal/SBread.js"
import TPK from "./modal/TPK.js"



const app = express()
const port = 8000

app.use(cors())
app.use(bodyParser.json());
connect();

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/news', async (req, res) => {
    try {
        const response = await News.find().sort({createdAt:-1});
        if (response)
            return res.status(200).json({ data: response });
        else
            return res.status(400).json({ msg: "Something went wrong" })
    } catch (error) {
        return res.status(400).json({ msg: "Something went wrong" })
    }
})

app.post("/news", async (req, res) => {
    const { title, data } = req.body;

    if (title == "")
        return res.status(400).json({ msg: "Please enter title" });

    if (data == "")
        return res.status(400).json({ msg: "Please enter data" });

    try {
        const response = await News.create({ title, data });
        if (response)
            return res.status(200).json({ msg: "Post Succesfully created" });
        else
            return res.status(400).json({ msg: "Something went wrong" });
    } catch (error) {
        return res.status(400).json({ msg: error })
    }
})

app.post("/products" , async (req,res)=>
{
    const {name,desc,catag} = req.body.value;
    const {url,public_id} = req.body;

    if(catag === "RBread")
    {
            try {
                const response = await RBread.create({name,desc,catag,url,public_id})
                if(response)
                    return res.status(200).json({msg:"Product succcesFully created"})
                else
                    return res.status(400).json({msg:"Something went wrong"})
            } catch (error) {
                
            }
    }
    else if(catag === "SBread" )
    {
        try {
            const response = await SBread.create({name,desc,catag,url,public_id})
            if(response)
                return res.status(200).json({msg:"Product succcesFully created"})
            else
                return res.status(400).json({msg:"Something went wrong"})
        } catch (error) {
            
        }
    }
    else if(catag === "CMB")
    {
        try {
            const response = await CMB.create({name,desc,catag,url,public_id})
            if(response)
                return res.status(200).json({msg:"Product succcesFully created"})
            else
                return res.status(400).json({msg:"Something went wrong"})
        } catch (error) {
            
        }
    }
    else if(catag === "TPK")
    {
        try {
            const response = await TPK.create({name,desc,catag,url,public_id})
            if(response)
                return res.status(200).json({msg:"Product succcesFully created"})
            else
                return res.status(400).json({msg:"Something went wrong"})
        } catch (error) {
            
        }
    }
    else if(catag === "Cookie")
    {
        try {
            const response = await Cookies.create({name,desc,catag,url,public_id})
            if(response)
                return res.status(200).json({msg:"Product succcesFully created"})
            else
                return res.status(400).json({msg:"Something went wrong"})
        } catch (error) {
            
        }
    }
    else {
        try {
            const response = await HC.create({name,desc,catag,url,public_id})
            if(response)
                return res.status(200).json({msg:"Product succcesFully created"})
            else
                return res.status(400).json({msg:"Something went wrong"})
        } catch (error) {
            
        }
    }
})


app.get("/product/RBread",async(req,res)=>
{
    try {
        const response = await RBread.find();
        if(response)
            return res.status(200).json({msg:"ALL posts" , response});
        else 
            return res.status(400).json({msg:"Something went wrong"});
    } catch (error) {
        return res.status(400).json({msg:"Something went wrong"});
    }
})

app.get("/product/Cookies",async(req,res)=>
{
    try {
        const response = await Cookies.find({})
        if(response)
            return res.status(200).json({msg:"ALL posts" , response});
        else 
            return res.status(400).json({msg:"Something went wrong"});
    } catch (error) {
        return res.status(400).json({msg:"Something went wrong"});
    }
})

app.get("/product/CMB", async(req,res)=>
{
    try {
        const response = await CMB.find({})
        if(response)
            return res.status(200).json({msg:"ALL posts" , response});
        else 
            return res.status(400).json({msg:"Something went wrong"});
    } catch (error) {
        return res.status(400).json({msg:"Something went wrong"});
    }
})

app.get("/product/TPK",async(req,res)=>
{
    try {
        const response = await TPK.find({})
        if(response)
            return res.status(200).json({msg:"ALL posts" , response});
        else 
            return res.status(400).json({msg:"Something went wrong"});
    } catch (error) {
        return res.status(400).json({msg:"Something went wrong"});
    }
})

app.get("/product/SBread",async(req,res)=>
{
    try {
        const response = await SBread.find({})
        if(response)
            return res.status(200).json({msg:"ALL posts" , response});
        else 
            return res.status(400).json({msg:"Something went wrong"});
    } catch (error) {
        return res.status(400).json({msg:"Something went wrong"});
    }
})

app.get("/product/HC", async (req,res)=>
{
    try {
        const response = await HC.find({})
        if(response)
            return res.status(200).json({msg:"ALL posts" , response});
        else 
            return res.status(400).json({msg:"Something went wrong"});
    } catch (error) {
        return res.status(400).json({msg:"Something went wrong"});
    }
})

app.listen(port, () => console.log("Server is running :" + port))