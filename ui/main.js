// counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function() {
    //create  a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //Capture the request and store it in a variable
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //not done yet
    };
    //make the request
    request.open('GET', 'http://sureshtrb.imad.hasura-app.io/counter',true);
    request.send(null);
};
//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
     //create  a request to the counter endpoint
    var request = new XMLHttpRequest();
    
    //Capture the request and store it in a variable
    request.onreadystatechange = function() {
        if (request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200){
                //capture the list of name and render in a list
            var names = request.responseText;
            names = JSON.parse(names);
            var list ='';
            for(var i = 0; i < names.length; i++){
                list += '<li>' + names[i] + '</li>';
            }
            var ul = document.getElementById('namelist');
            ul.innerHTML = list;
                    }
                }
                //not done yet
            };
            //make the request
            request.open('GET', 'http://sureshtrb.imad.hasura-app.io/submit-name?name='+ name, true);
            request.send(null);
    // make a request to the server and send the name
    
   
};