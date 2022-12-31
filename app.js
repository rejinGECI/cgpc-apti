const express=require('express');
const bodyParser=require('body-parser');
const app=new express();
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.render('index');
})
app.post("/signup",(req,res)=>{
    res.write('Post Works');
    res.end();
})
app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})