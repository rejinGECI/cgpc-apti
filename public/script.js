var xhr=new XMLHttpRequest();
const params={
    email:document.getElementById('uemail').value
}
xhr.open('POST','/signup',false);
xhr.setRequestHeader('Content-type','application/json');
var hid=document.getElementById('hid');

xhr.onload=function(){
    console.log(this.responseText);
    hid.innerHTML=this.responseText;
}

var submitbtn=document.getElementById('submit');
submitbtn.addEventListener('click',function(e){
    console.log("Clicked");
    e.preventDefault();
    xhr.send(JSON.stringify(params));
})