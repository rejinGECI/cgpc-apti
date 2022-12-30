const express=require('express');
const app=new express();
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    res.render('index',{title:'Rejin'});
});

app.listen(3000,()=>{
    console.log('Server listening on port 3000');
})