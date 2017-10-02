'use strict';

function checksum(input) {
  var string = input.toString();
  var sequence = [0, 1, 2, 3, 4, -4, -3, -2, -1, 0];
  var sum = 0;

  for (var i = 0; i < string.length; i++) {
    sum += parseInt(string.substring(i, i + 1));
  }

  for (var i = string.length - 1; i >= 0; i -= 2) {
    sum += sequence[parseInt(string.substring(i, i + 1))];
  }

  return (10 - (sum % 10) === 10) ? 0 : 10 - (sum % 10);
}

function generate(input, inputOptions) {
  var string = input.toString();
  var options = { pad: 0 };

  if (typeof inputOptions !== 'undefined') {
    if (typeof inputOptions.pad !== 'undefined') options.pad = inputOptions.pad;
  }

  if (options.pad > string.length) {
    string = Array(options.pad - String(string).length).join('0') + string;
  }

  return string + checksum(string);
}

function validate(input) {
  return checksum(input.toString().slice(0, -1)) === parseInt(input % 10);
}

module.exports = {
  checksum: checksum,
  generate: generate,
  validate: validate,
};
