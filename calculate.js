/**
 * A calculator which could only add two numbers
 * 
 * @author linyu dong
 * 
 */

var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.configure(function(){
	app.use(express.bodyParser());
	app.use(app.router);
	app.use(logfmt.requestLogger());
});

var fs = require("fs");
var port = Number(process.env.PORT || 8080);
var form = fs.readFileSync('./InputForm.html').toString();
var util = require("util");
var qs = require("querystring");

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
	console.log("num1", num1);
	var num2 = req.body.num2;
	var result = math.add(num1, num2);
	console.log("num2", num2);
	var header = head(title("response"));
	var body = util.format("<br/>The result is %d", result);
	var response = html(header + body);
	res.send(response);
});
app.listen(port, function() {
  console.log("Listening on " + port);
});
