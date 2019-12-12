var http = require('http');
var request = require('request'); 
var port = 2121;

var args = process.argv.slice(2);



http.createServer(function(req,res){

    var url = args[0] ? args[0] : "https://zodre12.github.io";

    request(url, function (error,response, body){
        if (!error && response.statusCode === 200) {

            var text = (args[1] === "text") ? 'text/plain' : 'text/html';

            res.writeHead(200, {'Content-Type' : text});
            res.write(body)
        }
        else{
            res.writeHead(response.statusCode, {'Content-Type' : 'text/plain'});
            res.write(error)
        }
        res.end();
    });

}).listen(port);

