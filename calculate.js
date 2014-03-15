/**
 * A calculator which could only add two numbers
 * 
 * @author linyu dong
 * 
 */

var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

var fs = require("fs");
var port = Number(process.env.PORT || 8080);
var form = fs.readFileSync('./InputForm.html').toString();
var util = require("util");

var math = require("./add.js");
console.log(form);

function html(s) {
	return util.format("<html>%s</html>", s);
}

function head(s) {
	return util.format("<head>%s</head>", s);
}

function title(s) {
	return util.format("<title>%s</title>", s);
}

function body(s) {
	return util.format("<body>%s</body>", s);
}

// handler for GET/POST
app.get("/", function(req, res) {
	res.send(form);
});
app.post("/", function(req, res) {
	var num1 = req.body.num1;
	var num2 = req.body.num2;
	var result = math.add(num1, num2);
	res.send(html(head(title("response")) + body(util.format("<br/>The result is %d", result))));
});
app.listen(port, function() {
  console.log("Listening on " + port);
});

/*var ipAddress = "127.0.0.1",
httpModule = require("http"),
url = require("url"),
qs = require("querystring"),
math = require("./add.js"),
fs = require("fs"),
form;


fs.readFile("./InputForm.html", function(err, data) {
	if (err) {
		throw err;
	}
	form = data;
});

httpModule.createServer(
				exports.request = function serviceRequest(request, response) {

					if (request.method === "GET") {
						response.end(form);
					} else if (request.method === "POST") {
						// create an instance
						var requestbody = "";
						request.on("data", function(data) {
							requestbody += data;
						});
						request.on("end", function() {
											var formData = qs.parse(requestbody);
											var num1 = formData.num1;
											var num2 = formData.num2;
											var ret = math.add(num1, num2);
											response.write("<html><head><title> resonse </title></head><body>");
											response.write("<br /> The result is:" + ret);

											response.end("</body> </html>");
										});

					}

				}).listen(Number(process.env.PORT || 8080), ipAddress);*/
