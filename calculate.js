/**
 * A calculator which could only add two numbers
 * 
 * @author linyu dong
 * 
 */

var ipAddress = "127.0.0.1",
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

				}).listen(Number(process.env.PORT || 8080), ipAddress);
