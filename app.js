const express=require('express');
const app=new express();

app.get('/',(req,res)=>{
    res.send('Welcome to CGPC APTI');
});

app.listen(3000,()=>{
    console.log('Server listening on port 3000');
})