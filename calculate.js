/**
 * A calculator which could only add two numbers
 * 
 * @author linyu dong
 * 
 */

var ipAddress = "127.0.0.1";
var portNumber = "50002";
var form = "<html> <head> <title>Form</title> </head> <body> <h1>Enter numbers</h1> <form method= \"post\"> <input type= \"number\" name=\"num1\"> <input type = \"number\" name = \"num2\"> <input type=\"submit\"> </form </body> </html>";

var httpModule = require("http");
var url = require("url");
var qs = require("querystring");
var math = require("./add.js");

httpModule
		.createServer(
				function serviceRequest(request, response) {

					if (request.method === "GET") {
						response.end(form);
					} else if (request.method === "POST") {
						// create an instance
						var requestbody = "";
						request.on("data", function(data) {
							requestbody += data;
						});
						request
								.on(
										"end",
										function() {
											var formData = qs
													.parse(requestbody);
											var num1 = formData.num1;
											var num2 = formData.num2;
											var ret = math.add(num1, num2);
											response
													.write("<html><head><title> resonse </title></head><body>");
											response.write("<br /> result:" + ret);

											response.end("</body> </html>");
										});

					}

				}).listen(portNumber, ipAddress);
