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

  }
});
```


## The "magic_mocha" task

### Overview
In your project's Gruntfile, add a section named `magic_mocha` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  magic_mocha: {
    
  },
});
```
*All values in this example represent the defaul values that will be used if they are not specified*

### Options

#### options.files
Type: `String`

The location of your unit tests files.

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

