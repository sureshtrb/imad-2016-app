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
        request.open('GET', 'http://sureshtrb.imad.hasura-app.io/counter', true);
        request.send(null);
};

//Submit Name
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() {
        if(request.readyState === XMLHttpRequest.DONE) {
            if(request.status === 200){
                var names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0; i < names.length; i++){
                    list += '<li>' + names[i] + '</li>';
                }
                var ui = document.getElementById('namelist');
                ul.innerHTML = list;
                
            }
        }
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    request.open('GET', 'http://sureshtrb.imad.hasura-app.io/counter', true);
        request.send(null);
};