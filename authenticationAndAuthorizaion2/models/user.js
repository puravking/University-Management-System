const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kumarpurav59:puru__123@cluster0.f5dpn.mongodb.net/");
const userSchema = mongoose.Schema({
    username:String,
    email:String,
    password:String,
    age:Number
});
module.exports =  mongoose.model("user",userSchema);