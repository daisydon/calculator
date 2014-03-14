/**
 * New node file
 */

var sum = require("/Users/linyu/Documents/workspace/Calculator/add.js");

exports['Calculator.add'] = function (test) {
	test.equal(sum.Calculator.add(1,4), 4);
	test.done();
};