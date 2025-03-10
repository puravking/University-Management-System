const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kumarpurav59:puru__123@cluster0.f5dpn.mongodb.net/");
const userSchema = mongoose.Schema({
    image:String,
    email:String,
    name:String
})
module.exports = mongoose.model("user",userSchema);