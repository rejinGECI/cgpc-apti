const mongoose=require('mongoose');
const {Schema,model}=mongoose;

const questionSchema=new Schema({
    qnId:String,
    qn:String,
    options:[String],
    author:String,
    tags:[String],
    createdAt:Date,
    updatedAt:Date,
    comments:[{
        user:String,
        content:String,
        votes:String
    }]
});

const Questions=model('Questions',questionSchema);
module.exports=Questions;