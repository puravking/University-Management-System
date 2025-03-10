const fs = require('fs');
// fs.writeFile("a.txt","Hey hello",function(err) {
//     if(err) console.error(err);
//     else console.log("Done");
// })
// fs.appendFile("a.txt","Hey hello GI",function(err) {
//     if(err) console.error(err);
//     else console.log("Done");
// })
// fs.rename("b.txt","a.txt",(err)=>{
//     if(err) console.error(err);
//     else console.log("Done");
// })
fs.copyFile("a.txt","./copy/copy.txt",(err)=>{
    if(err) console.error(err);
    else console.log("Done")
})
fs.unlink("a.txt",(err)=>{
    if(err) console.error(err);
    else console.log("Done")
})
fs.rmdir("./copy",{recursive:true},(err)=> {
    if(err) console.error(err);
    else console.log("Done");
})