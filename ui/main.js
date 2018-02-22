console.log('Loaded!');
//changing the text of index.html
var element = document.getElementById('main-text');
element.innerHTML="this is the new web app";
//moving the image madi
var img = document.getElementById('madi');
img.onclick=function(){
img.style.marginLeft='100px';
};