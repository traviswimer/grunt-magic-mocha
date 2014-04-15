var assert = require("assert");

var app = require('../src/app');

describe("testApp", function(){
	it("should have a 'testValue' defined", function(){
		assert.equal( app.testValue, "test" );
	});
});

describe("global objects", function(){
	describe("window", function(){
		it("should exist", function(){
			assert( window );
		});
	});

	describe("document", function(){
		it("should exist", function(){
			assert( document );
		});
	});

	describe("navigator", function(){
		it("should exist", function(){
			assert( navigator );
		});
	});
});