console.log('Loaded!');
//changing the text of index.html
var element = document.getElementById('main-text');
element.innerHTML="this is the new web app";
//moving the image madi
var img = document.getElementById('madi');
var marginLeft=0;

function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
var interval=setInterval(moveRight,100);
};