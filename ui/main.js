//counter code
var button = document.getElementById('counter');

button.onclick = function() {
    //create request
    var request = new XMLHttpRequest();
    
    //Capture the response and store in variable
    request.onreadystatechange = function() {
        if (tequest.readystate === XMLHttpRequest.DONE) {
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
