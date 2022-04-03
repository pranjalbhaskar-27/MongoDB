const express=require('express');
const app= express();
const data=require('./db.json')

app.get("/",function (req, res){
    console.log("console says");
    res.send("hello")
})


app.get("/book",logger, (req, res)=>{
  return res.send("No books")
})

app.get("/book/:name",auth, (req, res)=>{
  res.send({bookname:req.params.name});    
})
function logger(req, res, next){
    console.log("Fetching all books")
    next();
}
function auth(req, res, next){
    console.log(req.params.name);

    next();
}
app.listen(5000,() =>{
   
    console.log('listening on 4000');
});