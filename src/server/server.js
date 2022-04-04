const uw=require('./users_write.js')
const uf=require('./users_find.js')
const express=require('express');
const cors=require('cors')
const bodyparser=require('body-parser');
const udw=require('./userData.js')
const udf=require('./userData_find.js')
const pw=require("./post_write.js")
const ug=require('./users_get.js')
const app=express()
const multer=require('multer')
const fs=require('fs')
const path=require('path')
app.use(cors())
app.use(bodyparser.json())


const storage=multer.diskStorage({
  destination:function(request,file,callback){
    callback(null,'/home/aditya/Downloads/memories-main/public/uploads/dps')
  },
  filename:function(request,file,callback){
    callback(null,file.originalname)
  }
})
const storage2=multer.diskStorage({
  destination:function(request,file,callback){
    callback(null,'/home/aditya/Downloads/memories-main/public/uploads/posts')
  },
  filename:function(request,file,callback){
    callback(null,file.originalname)
  }
})

app.get('/',(req,res)=>{
res.send("The server is runing!");
});
const upload=multer({
  storage:storage
})
const upload2=multer({
  storage:storage2
})
app.post('/enter', async (req,res)=>{
  

  const a= await uf.find(req.body.user_email)
  const dir=req.body.user_email
  if(a === null)
  {
    await uw.write(req.body.user_email,req.body.user_password)
    fs.mkdir(path.join('/home/aditya/Downloads/memories-main/public/uploads',dir),(err)=>{
      if(err){
      console.log(err)}
      console.log("Directory created!")
    })
    console.log("Registered!")
    res.json({Response:"Registered!"})

  }
  else{
      console.log("Exists!")
      res.json({Response:"Exists!"})
  }
 
  
  


});

app.post('/signup',upload.single('image'),async (req,res)=>{
 await udw.userData_write(req.body.user_name,req.body.user_email,req.body.password,req.body.user_bio,req.file.filename)
 res.json("Done!")


})

app.post('/user',async (req,res)=>{
const result=await udf.find_data(req.body.user_email)
res.send(result)
console.log(result)
})
app.post('/post',upload2.single('image'),async(req,res)=>{
  await pw.Post_write(req.body.author,req.file.filename,req.body.description)
  console.log("Posted!")
  res.send("Posted!")

})
app.post('/search',async (req,res)=>{
const response=await ug.find_users(req.body.name)
console.log(response)
res.send(response )
})

app.listen(3232,()=>{
console.log("The server is running");

});