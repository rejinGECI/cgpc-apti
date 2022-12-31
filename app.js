const mongoose = require('mongoose');
const Questions=require('./Questions');


const url = `mongodb+srv://rejinGECI:12ej11v%40R@cluster0.xbu1qk3.mongodb.net/cgpc-apti?retryWrites=true&w=majority`;

const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        title='DB Connected';
        console.log('Connected to database ')
    })
    .catch( (err) => {
        title='Failed';
        console.error(`Error connecting to the database. \n${err}`);
    })

const question1=new Questions({
    qnId:101,
    qn:'Which is the capital of India',
    options:['Tvm','New Delhi','Kollam','Kerala'],
    author:'Rejin R'
});

async function f(){
    await question1.save();
}

f();
const express=require('express');
const app=new express();
app.set('view engine','ejs');
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res)=>{
    // console.log(database);
    res.render('index',{title:title});
});
app.get('/:name',(req,res)=>{
    res.render('home',{nam:req.params.name});
});

app.listen(3000,()=>{
    console.log('Server listening on port 3000');
})