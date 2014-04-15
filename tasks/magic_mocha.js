/*
 * grunt-magic-mocha
 * https://github.com/traviswimer/grunt-magic-mocha
 *
 * Copyright (c) 2014 Travis Wimer
 * Licensed under the MIT license.
 */


// window/document/navigator objects break jshint. These options force jshint to
// ignore problem with defining without `var` and allows globals

/* jshint -W020 */
/* global document */
/* global window */
/* global navigator */


'use strict';

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('magic_mocha', 'Grunt task to run front-end mocha unit tests from the command line with no browser.', function() {

		var done = this.async();

		// Merge task-specific and/or target-specific options with these defaults.
		var options = this.options({
			globals: {},
			mochaOptions:{
				reporter: "spec",
				ui: "bdd"
			}
		});


		// Initialize jsDOM
		var jsdom = require('jsdom').jsdom;
		global.document = jsdom('<html><head><script></script></head><body></body></html>');
		global.window = document.createWindow();
		global.navigator = window.navigator = {};

		// Set window globals
		for( var globalName in options.globals ){
			global.window[globalName] = require( options.globals[globalName] );
		}


		// Initialize mocha
		var Mocha = require('mocha');
		var mocha = new Mocha();

		// Set mocha options
		for( var mochaOption in options.mochaOptions ){
			mocha[mochaOption]( options.mochaOptions[mochaOption] );
		}


		// Iterate each test file and add to mocha
		this.files.forEach(function(file) {
			file.src.forEach(function(filepath){
				if(grunt.file.exists(filepath)){
					mocha.addFile( filepath );
				}
			});
		});

		// Run the tests
		mocha.run( done );


	});

};
