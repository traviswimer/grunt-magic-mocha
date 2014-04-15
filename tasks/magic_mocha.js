/*
 * grunt-magic-mocha
 * https://github.com/traviswimer/grunt-magic-mocha
 *
 * Copyright (c) 2014 Travis Wimer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Please see the Grunt documentation for more information regarding task
	// creation: http://gruntjs.com/creating-tasks

	grunt.registerMultiTask('magic_mocha', 'Grunt task to run front-end mocha unit tests from the command line with no browser.', function() {


	// Merge task-specific and/or target-specific options with these defaults.
	var options = this.options({
		require: [],
		reporter: "spec",
		ui: "bdd"
	});

	this.files.forEach(function(file){
		
	});


	});

};
