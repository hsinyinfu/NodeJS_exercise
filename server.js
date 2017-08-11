var http = require("http");
var url = require("url");

exports.start = function(route, handle){
	http.createServer(function(request,response){
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");

		route(handle,pathname, response);

	}).listen(8888);
	console.log("Server has started.");
}
