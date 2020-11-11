(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("luhn", [], factory);
	else if(typeof exports === 'object')
		exports["luhn"] = factory();
	else
		root["luhn"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  checksum: function checksum(input) {
    var string = input.toString();
    var sum = 0;
    var parity = 2;

    for (var i = string.length - 1; i >= 0; i--) {
      var digit = Math.max(parity, 1) * string[i];

      sum += digit > 9 ? digit.toString().split('').map(Number).reduce(function (a, b) {
        return a + b;
      }, 0) : digit;
      parity *= -1;
    }

    sum %= 10;

    return sum > 0 ? 10 - sum : 0;
  },
  generate: function generate(input, inputOptions) {
    var string = input.toString();
    var options = { pad: 0, weightFactor: 2 };

    // option pad
    if (typeof inputOptions !== 'undefined') {
      if (typeof inputOptions.pad !== 'undefined') {
        options.pad = inputOptions.pad;

        if (options.pad > string.length) {
          string = Array(options.pad - String(string).length).join('0') + string;
        }
      }
    }

    return string + this.checksum(string);
  },
  random: function random(input, inputOptions) {
    function getRandomStringOfNumbers(length) {
      var randomStringOfNumbers = '';

      while (randomStringOfNumbers.length < length) {
        var random = Math.random().toString();

        randomStringOfNumbers += random.substr(2, random.length);

        if (randomStringOfNumbers.length > length) {
          randomStringOfNumbers = randomStringOfNumbers.substr(0, length);
        }
      }

      return randomStringOfNumbers;
    }

    return this.generate(getRandomStringOfNumbers(input - 1), inputOptions);
  },
  validate: function validate(input) {
    return this.checksum(input.toString().slice(0, -1)) === parseInt(input.toString().slice(-1));
  }
};

/***/ })
/******/ ]);
});