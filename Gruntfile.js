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

		// Configuration to be run (and then tested).
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

		// Unit tests.
		mochaTest: {
			options: {
				reporter: "spec"
			},
			tests: ['test/*_test.js']
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
	grunt.loadNpmTasks('grunt-mocha-test');

	// Lint and run tests
	grunt.registerTask('test', ['jshint', 'magic_mocha']);

	// Default is same as `test`
	grunt.registerTask('default', ['test']);

};
