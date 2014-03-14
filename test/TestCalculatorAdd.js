/**
 * New node file
 */

var sum = require("/Users/linyu/Documents/workspace/Calculator/add.js");

exports.testCalculator = function (test) {
	test.equal(sum.add(1,4), 4);
	test.equal(sum.add(0, 100), 100);
	test.equal(sum.add(100, 8), 109);
	test.equal(sum.add(-10, -10), -20);
	test.equal(sum.add(100000000, 10000), 1000000);
	test.done();
};