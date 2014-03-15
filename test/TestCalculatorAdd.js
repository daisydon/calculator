/**
 * New node file
 */

var sum = require("../add.js");

exports.testCalculator = function (test) {
	//positive integer
	test.equal(sum.add(1,4), 5);
	test.equal(sum.add(0, 100), 100);
	test.equal(sum.add(100, 8), 108);
	
	//negative integer
	test.equal(sum.add(-10, -10), -20);
	
	//random integer
	test.equal(sum.add(10000, 10000), 20000);
	
	//zero
	test.equal(sum.add(0, 0), 0);
	
	test.done();
};
