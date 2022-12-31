var xhr=new XMLHttpRequest();
uemail=document.getElementById('uemail');
umob=document.getElementById('umob');
upswd=document.getElementById('upswd');
urpswd=document.getElementById('urpswd');
var hid=document.getElementById('hidden-msg');
var submitbtn=document.getElementById('submit');
submitbtn.disabled=true;
// const params={
//     email:uemail.value,
//     mob:umob.value,
//     pswd:upswd.value,
//     rpswd:urpswd.value
// }
console.log(urpswd);
urpswd.addEventListener('keyup',()=>{
    console.log(upswd.value.length);
    if(upswd.value.length>0&&urpswd.value.length>0&&upswd.value==urpswd.value){
        submitbtn.disabled=false;
        hid.innerHTML='';
    }else{        
        hid.innerHTML=`Password doesn't match`;
        hid.style.color='red';
    }
})



/*
xhr.open('POST','/signup',false);
xhr.setRequestHeader('Content-type','application/json');

xhr.onload=function(){
    console.log(this.responseText);
    hid.innerHTML=this.responseText;
}

submitbtn.addEventListener('click',function(e){
    console.log("Clicked");
    e.preventDefault();
    xhr.send(JSON.stringify(params));
})*/