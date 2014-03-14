/**
 * Unit Test for add module
 * @author linyu dong
 */

var mathjs = require('mathjs');

exports.add = function (num1, num2) {
	var math = mathjs();
	return math.select(num1 - 0).add(num2 - 0).done();
};