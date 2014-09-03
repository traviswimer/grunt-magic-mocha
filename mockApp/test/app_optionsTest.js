var assert = require("assert");

var app = require('../src/app');

describe("testApp", function(){
	it("should have a 'testValue' defined", function(){
		assert.equal( app.testValue, "test" );
	});
});

describe("global object", function(){

	it("should contain jquery", function(){
		assert( $ );
		assert( $.ajax );
	});

	describe("window", function(){
		it("should exist", function(){
			assert( window );
		});

		it("should contain jquery", function(){
			assert( window.$ );
			assert( window.$.ajax );
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