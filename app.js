const express=require('express');
const bodyParser=require('body-parser');
const app=new express();
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));
// app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render('index');
});
app.get("/signup",(req,res)=>{
    res.render('signup');
})
app.post("/signup",(req,res)=>{
    console.log(req.body);
})
app.listen(3000,()=>{
    console.log("Server listening on port 3000");
})