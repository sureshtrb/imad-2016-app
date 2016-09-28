console.log('Loaded!');
// change the document balue text
var element = document.getElementById("main-text");
element.innerHTML = "New Value";
var img = document.getElementById("madi");
img.onclick = function(){
  img.style.marginLeft = '100px';  
};