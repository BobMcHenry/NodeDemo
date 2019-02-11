const http = require('http')
const port = 8080;

http.createServer(myServerCallback).listen(port);

function myServerCallback(request, response) {
  response.writeHeader(200, {'Content-Type' : 'text/html' });
  response.end('<h1>Loud and clear!</h1>');
}


console.log("Listening on port " + String(port))
