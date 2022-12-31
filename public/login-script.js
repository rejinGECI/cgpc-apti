var xhr=new XMLHttpRequest();
uemail=document.getElementById('uemail');
umob=document.getElementById('umob');
upswd=document.getElementById('upswd');
urpswd=document.getElementById('urpswd');
var submitbtn=document.getElementById('submit');
// submitbtn.disabled=true;
// const params={
//     email:uemail.value,
//     mob:umob.value,
//     pswd:upswd.value,
//     rpswd:urpswd.value
// }
console.log(urpswd);
urpswd.addEventListener('blur',()=>{
    if(upswd.value!==urpswd.value){
        hid.innerHTML='Password doesnt match';
        hid.style.color='red';
    }else{        
        submitbtn.disabled=false;
    }
})



/*
xhr.open('POST','/signup',false);
xhr.setRequestHeader('Content-type','application/json');
var hid=document.getElementById('hid');

xhr.onload=function(){
    console.log(this.responseText);
    hid.innerHTML=this.responseText;
}

submitbtn.addEventListener('click',function(e){
    console.log("Clicked");
    e.preventDefault();
    xhr.send(JSON.stringify(params));
})*/