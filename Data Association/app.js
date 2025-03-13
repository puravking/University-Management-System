const express = require("express");
const app = express();
const userModel = require("./models/user");
const postModel = require("./models/post");
app.get("/",(req,res)=> {
    res.send("Hello");
})
app.get("/create",async (req,res)=> {
    let user = await userModel.create({
        username:"harsh",
        age:25,
        email:"harsh@gmail.com"
    })
    res.send(user);
})
app.get("/post/create",async (req,res)=> {
    let post = await postModel.create({
        postData:"Hello How are u?",
        user:"67d2c3be66c3cbb07899e879",
    })
    let user =await  userModel.findOne({_id:"67d2c3be66c3cbb07899e879"});
    user.posts.push(post._id);
    await user.save();
    res.send({post,user});
})
app.listen(3000);