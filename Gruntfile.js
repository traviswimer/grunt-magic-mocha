/*
 * grunt-magic-mocha
 * https://github.com/traviswimer/grunt-magic-mocha
 *
 * Copyright (c) 2014 Travis Wimer
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		jshint: {
			all: [
				'Gruntfile.js',
				'tasks/*.js',
			],
			options: {
				jshintrc: '.jshintrc',
			},
		},

		// Runs the magic-mocha task. This runs unit tests, which basically
		// unit tests itself like some kind of unit-testception. It kind of
		// hurts my brain, so I just accept it.
		magic_mocha: {
			defaults: {
				files: {
					src: ['mockApp/test/*_defaultsTest.js']
				}
			},
			withOptions: {
				options: {
					globals: {
						'$': 'jquery'
					},
					mochaOptions:{
						reporter: "nyan"
					}
				},
				files: {
					src: ['mockApp/test/*_optionsTest.js']
				}
			}
		},

		watch: {
			tests: {
				files: [
					'tasks/**/*.js',
					'mockApp/**/*.js'
				],
				tasks: ['test']
			}
		}

	});

	// Actually load the magic-mocha plugin's task(s).
	grunt.loadTasks('tasks');

	// These plugins provide necessary tasks.
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// Lint and run tests
	grunt.registerTask('test', ['jshint', 'magic_mocha']);

	// Default is same as `test`
	grunt.registerTask('default', ['test']);

};
