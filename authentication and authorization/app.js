// const express = require("express");
const cookieParser = require("cookie-parser");
// const app = express();

// app.get("/",(req,res)=> {
//     res.cookie("name","purav");
//     res.send("Hello");
// })
// app.get("/read",(req,res)=> {
//     console.log(req.cookies);
//     res.send("done");
// })
// app.listen(3000);


const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const app = express();
app.use(cookieParser()); 
// ENCRYPTION
// app.get("/",(req,res)=> {
//     bcrypt.genSalt(10,(err,salt) => {
//         bcrypt.hash("passwordRandom",salt,(err,hash)=> {
//             console.log(hash);
//             res.send(hash);
//         })
//     })
// })
// DECRYPTION
// app.get("/",(req,res)=> {
//     bcrypt.compare("passwordRandom","$2b$10$Jn6tcAuPbyPpkLiyHcCDzuYryUBJRaOA/IEYnWCtpdzSnWRbTbgy.",(err,result)=> {
//         console.log(result);
//     })
// })
app.get("/",(req,res)=> {
    let token = jwt.sign({email:"purav716@gmail.com"},"secret")
    res.cookie("token",token);
    console.log(token);
    res.send(token);
})
app.get("/read",(req,res)=> {
    let data = jwt.verify(req.cookies.token,"secret");
    console.log(data);
    res.send(data);
})

app.listen(3000);


