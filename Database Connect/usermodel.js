const mongoose = require("mongoose");
mongoose.connect(`mongodb+srv://kumarpurav59:puru__123@cluster0.f5dpn.mongodb.net/`);

const userSchema = mongoose.Schema({
    name:String,
    username:String,
    email:String
})

module.exports = mongoose.model("user",userSchema);