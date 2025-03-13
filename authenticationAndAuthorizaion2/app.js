const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const app = express();
const userModel = require("./models/user")
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");
app.set("view engine","ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"public")));
app.get("/",(req,res)=> {
    res.render("index");
});
app.post("/create",(req,res) => {
    let {username,email,password,age} = req.body;
    bcrypt.genSalt(10,(err,salt)=> {
        bcrypt.hash(password,salt,async (err,hash) => {
            let createdUser = await userModel.create({
            username,
            email,
            password : hash,
            age
        });
        let token = jwt.sign({email},"secret");
        res.cookie("token",token);
        res.send(createdUser);
        });
    });
});
app.get("/login",(req,res) => {
    res.render("login")
});
app.post("/login",async (req,res)=> {
    let user =await userModel.findOne({email:req.body.email});
    if(!user) return res.send("something is wrong");
    bcrypt.compare(req.body.password,user.password,(err,result)=> {
        if(result) {
            let token = jwt.sign({email:user.email},"secret");
            res.cookie("token",token);
            res.send("yes you can login");
        }
        else res.send("Can't login");
    });
    console.log(user.password,req.body.password);
});


app.listen(3000);