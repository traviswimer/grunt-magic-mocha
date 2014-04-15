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
          'test/**/*.js'
        ],
        tasks: ['mochaTest']
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
  grunt.registerTask('test', ['jshint', 'mochaTest']);

  // Default is same as `test`
  grunt.registerTask('default', ['test']);

};
