const express = require("express");
const app = express();
const userModel = require("./usermodel")
app.get("/",(req,res)=> {
    res.send("hey");
})
app.get('/create',async (req,res)=> {
    let createdUser = await userModel.create({
        name:"anuja",
        email:"@gmail.com",
        username:"harsh"
    })
    res.send(createdUser);
})
app.get("/update",async (req,res)=> {
    let user = await userModel.findOneAndUpdate({username:"harsh"},{name:"purav"},{new:true})
    res.send(user);
})
app.get("/read",async (req,res)=> {
    let users = await userModel.find();
    res.send(users);
})
app.get("/delete",async (req,res)=> {
    let users = await userModel.findOneAndDelete({name:"anuja"});
    res.send(users);
})
app.listen(3000);