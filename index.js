'use strict';

module.exports = (function() {
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

  function generate(input) {
    if (typeof input !== 'object') throw { message: 'Object expected but ' + typeof input + ' was given.' };

    var options = {
      string: (input.number || '').toString(),
      pad: input.pad || 0,
    };

    if (typeof options.pad !== undefined && (options.pad > options.string.length)) {
      options.string = Array(options.pad - String(options.string).length).join('0') + options.string;
    }

    return options.string + checksum(options.string);
  }

  return {
    checksum: checksum,
    generate: generate,
  };
})();
