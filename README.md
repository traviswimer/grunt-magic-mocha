# grunt-magic-mocha [![Build Status](https://travis-ci.org/traviswimer/grunt-magic-mocha.png?branch=master)](https://travis-ci.org/traviswimer/grunt-magic-mocha)

> Grunt task to run front-end mocha unit tests from the command line with no browser.

## Getting Started
This plugin requires [Grunt](http://gruntjs.com/) `~0.4.4` -- [Learn to use Grunt](http://gruntjs.com/getting-started)

Install the plugin with this command:

```shell
npm install grunt-magic-mocha --save-dev
```

Enable in your Gruntfile with:

```js
grunt.loadNpmTasks('grunt-magic-mocha');
```

## Quick setup

```js
grunt.initConfig({
  magic_mocha: {
    myTests: {
      files: {
        src: ['test/**/*_test.js']
      }
    }
  }
});
```

## The "magic_mocha" task

### Overview
In your project's Gruntfile, add a section named `magic_mocha` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  magic_mocha: {
    myTestsWithOptions: {
      options: {
        globals: {
          // Add the jQuery module to the window object
          '$': 'jquery'
        },
        mochaOptions:{
          // You should be able to include any mocha options here
          reporter: "spec",
          ui: "bdd"
        }
      },
      files: {
        src: ['test/**/*_test.js']
      }
    }
  }
});
```

### Options

#### options.globals
Type: `object`

Specifies modules that should be attached to the global `window` variable.

#### options.mochaOptions
Type: `object`

Specifies any mocha options to be used. For more details, look throught the [http://visionmedia.github.io/mocha/](Mocha documentation).

The following options are included by default:
*   **reporter** - "spec"
*   **ui** - "bdd"

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

