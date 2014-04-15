var assert = require("assert");

var app = require('../src/app');

describe("testApp", function(){
	it("should have a 'testValue' defined", function(){
		assert.equal( app.testValue, "test" );
	});
});