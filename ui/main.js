//counter code
var button = document.getElementById('counter');

button.onclick = function() {
    //create request
    var request = new XMLHttpRequest();
    
    //Capture the response and store in variable
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        
    };
    //make a request
        request.open('GET', 'http://sureshtrb.imad.hasura-app.io/counter', true);
        request.send(null);
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var sunmit = document.getElementById('submit_btn');
submit.onclick = function() {
  //make request to server
  
  //capture the list of names
  var name = [name1, name2, name3, name4];
  var list = "";
  for(var i = 0; i < name.length; i++) {
      list += '<li>' + name[i] + '</li>';
  }
  var ul = document.getElementById("namelist");
  ul.innerHtml = list;
};