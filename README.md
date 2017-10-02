# Luhn Generator
A generator of numbers that passes the checksum of Luhn algorithm or Luhn formula, also known as the "modulus 10" or "mod 10" algorithm

```
npm install luhn-generator --save
```

## Usage
```js
import luhn from 'luhn-generator';
```

Generate Luhn "check digit" for number `1`:
```js
luhn.checksum(1); // 8
```

Generate number that will pass Luhn algorithm validation:
```js
luhn.generate(1); // 18
luhn.generate(1, { pad: 5 }); // 00018
```

Validate number with Luhn algorithm:
```js
luhn.validate(1); // false
luhn.validate(18); // true
```

## To Do

- Tests
- Add hash function support for `generate` function
- Page with examples
