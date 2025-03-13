const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://kumarpurav59:puru__123@cluster0.f5dpn.mongodb.net/dataAssociation");
const userSchema = mongoose.Schema({
    username:String,
    email:String,
    age:Number,
    posts:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'post'
        }

    ]
})
module.exports = mongoose.model("user",userSchema);