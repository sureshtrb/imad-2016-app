// counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    //make a request to the counter endpoint
    
    //Capture the request and store it in a variable
  //Render the variable 
  counter = counter +1;
  var span = document.getElementById('count');
  span.innerHTML = counter.toString();
};