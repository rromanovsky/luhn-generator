module.exports = {
  checksum(input) {
    const string = input.toString();
    let sum = 0;
    let parity = 2;

    for (let i = string.length - 1; i >= 0; i--) {
      const digit = Math.max(parity, 1) * string[i];

      sum += digit > 9 ? digit.toString().split('').map(Number).reduce((a, b) => a + b, 0) : digit;
      parity *= -1;
    }

    sum %= 10;

    return sum > 0 ? 10 - sum : 0;
  },

  generate(input, inputOptions) {
    let string = input.toString();
    const options = { pad: 0, weightFactor: 2 };

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

  random(input, inputOptions) {
    function getRandomStringOfNumbers(length) {
      let randomStringOfNumbers = '';

      while (randomStringOfNumbers.length < length) {
        const random = Math.random().toString();

        randomStringOfNumbers += random.substr(2, random.length);

        if (randomStringOfNumbers.length > length) {
          randomStringOfNumbers = randomStringOfNumbers.substr(0, length);
        }
      }

      return randomStringOfNumbers;
    }

    return this.generate(getRandomStringOfNumbers(input - 1), inputOptions);
  },

  validate(input) {
    return this.checksum(input.toString().slice(0, -1)) === parseInt(input % 10);
  },
}
