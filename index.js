'use strict';

function checksum(input, weightFactor) {
  var string = input.toString();
  var weightFactor = weightFactor || 2;
  var sum = 0;

  for (var i = string.length - 1; i >= 0; i--) {
    sum += Math.max(weightFactor, 1) * string[i];
    weightFactor *= -1;
  }

  sum %= 10;

  return sum > 0 ? 10 - sum : 0;
}

function generate(input, inputOptions) {
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

  // option weightFactor
  if (typeof inputOptions !== 'undefined') {
    if (typeof inputOptions.weightFactor !== 'undefined') {
      options.weightFactor = inputOptions.weightFactor;
    }
  }

  return string + checksum(string, options.weightFactor);
}

function random(length, options) {
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

  return generate(getRandomStringOfNumbers(length), options);
}

function validate(input, weightFactor) {
  // @TODO: parseInt(input % 10) <-- weightFactor?
  return checksum(input.toString().slice(0, -1), weightFactor) === parseInt(input % 10);
}

module.exports = {
  checksum: checksum,
  generate: generate,
  random: random,
  validate: validate,
};
