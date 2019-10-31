http = require("http")
var port = 2169;

http.createServer(function(req,res){
    res.writeHead(200, {'Content-Type' :"text/plain" });
    res.write("hello im a apex predator");
    res.end("you are looking at your apex champion");
}).listen(port);


