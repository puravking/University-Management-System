const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get('/cars',(req,res)=>{
    res.json({
        a:"Hi"
    });
})
app.listen(3000);