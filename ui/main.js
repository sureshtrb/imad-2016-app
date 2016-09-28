console.log('Loaded!');
// change the document balue text
var element = document.getElementById("main-text");
element.innerHTML = "New Value";
var img = document.getElementById("madi");
function moveRight(){
    marginLeft = marginLeft + 10;
}
img.onclick = function(){
  var interval = setInterval(moveRight + '100px'); 
};