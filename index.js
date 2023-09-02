import connect from "./utlis/db.js";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import User from "./modal/User.js";

const app = express();
const port = 8000;

app.use(cors());
app.use(bodyParser.json());
connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    if (password.length < 8)
      return res.status(400).json({ msg: "Password must contain 8 digits" });
    else {
      let resp = await User.findOne({ email });
      if (resp) {
        if (resp.password == password)
          return res
            .status(200)
            .json({ msg: "User successfully Login", details: resp });
        else return res.status(400).json({ msg: "User password does't match" });
      } else {
        return res.status(400).json({ msg: "User doest't exist " });
      }
    }
  } catch (error) {
    return res.status(400).json({ msg: "Somethig went wrong" });
  }
});

app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    if (password.length < 8)
      return res.status(400).json({ msg: "Password must contain 8 digits" });
    else {
      let resp = await User.findOne({ email });
      if (resp) return res.status(400).json({ msg: "User already exist's" });
      const isCreated = await User.create({ name, email, password });
      if (isCreated)
        return res
          .status(200)
          .json({ msg: "User create succesfully", isCreated });
    }
  } catch (error) {
    return res.status(400).json({ msg: "Somethig went wrong" });
  }
});

app.post("/addFav", async (req, res) => {
  const { email } = req.body;
  const { id, original_title, poster_path } = req.body.favData;
  try {
    const isUpdate = await User.updateOne({ email }, { $push: {favorites:{id,original_title,poster_path}}});
    if (isUpdate)
      return res
        .status(200)
        .json({ msg: "Add item in Favorite", isUpdate });
  } catch (error) {
    return res.status(400).json({ msg: "Somethig went wrong" });
  }
});

app.post("/fav",async (req,res) =>
{
  const { email } = req.body;
  try {
    const isData = await User.findOne({ email });
    if (isData)
      return res
        .status(200)
        .json({ msg: "All items", data:isData.favorites });
  } catch (error) {
    return res.status(400).json({ msg: "Somethig went wrong" });
  }
})

app.post("/removefav",async (req,res) =>
{
  const { email , id , original_title , poster_path } = req.body;
  try {
    const isData = await User.update({ email }, { $pull: {favorites :  {id}}}, {new:true});
    if (isData)
      return res
        .status(200)
        .json({ msg: "All items", data:isData.favorites });
  } catch (error) {
    return res.status(400).json({ msg: "Somethig went wrong" ,error});
  }
})



app.listen(port, () => console.log("Server is running :" + port));
