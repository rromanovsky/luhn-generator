# Luhn Generator
A generator of numbers that passes the validation of Luhn algorithm or Luhn formula, also known as the "modulus 10" or "mod 10" algorithm

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
luhn.checksum(12); // 5
```

Generate number that will pass Luhn algorithm validation:
```js
luhn.generate(1); // 18
luhn.generate(12); // 125
luhn.generate(1, { pad: 5 }); // 00018
```

Generate random number that will pass Luhn algorithm validation:
```js
luhn.random(12); // 6436204626980
luhn.random(50); // 54833184596638864915195736286128781213916608803535
luhn.random(12, { pad: 50 }); // 00000000000000000000000000000000000004591785326079
```

Validate number with Luhn algorithm:
```js
luhn.validate(1); // false
luhn.validate(18); // true
luhn.validate(125); // true
```

## To Do

- Add examples for CommonJS, AMD, Script tag
- Add page with examples
- Add card number generation
