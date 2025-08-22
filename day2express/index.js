const express=require('express');
const app=express();


app.use(express.json())  //解析json格式的请求体

let users=[
    {id:1,name:'zhangsan',age:20},
    {id:2,name:'lisi',age:30},
    {id:3,name:'wangwu',age:40}]


app.get("/",(req,res)=>{

    res.send(users)
})   //localhost:8888/

app.get("/:id",(req,res)=>{

   let id= req.params.id;

   let specificuser=users.find(item => item.id==id)
   res.send(specificuser)
})


app.post("/",(req,res)=>{

    let newuser=req.body;
    users.push(newuser)
    res.send({message:"User added successfully", user: newuser})



})



app.listen(8888,()=>{
    console.log('server is running at http://localhost:8888');
})





