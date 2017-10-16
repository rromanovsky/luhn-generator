# Luhn Generator
A generator of numbers that passes the validation of Luhn algorithm or Luhn formula, also known as the "modulus 10" or "mod 10" algorithm

```
npm install luhn-generator --save
```

## Usage

- ECMAScript Harmony
    ```js
    import luhn from '../dist/luhn.min';
    luhn.generate(1, { pad: 12 }); // 000000000018
    ```
- CommonJS
    ```js
    $ node
    > const luhn = require('../dist/luhn.min');
    > luhn.generate(1, { pad: 12 }); // 000000000018
    ```
- AMD
    ```html
    <!-- amd.html -->
    <html>
      <body>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.5/require.min.js"></script>
        <script>
          window.requirejs(['dist/luhn.min'], function(luhn) {
            console.log(luhn.generate(1, { pad: 12 })); // 000000000018
          });
        </script>
      </body>
    </html>
    ```
- Script Tag
    ```html
    <!-- script-tag.html -->
    <html>
      <body>
        <script src="./dist/luhn.min.js"></script>
        <script>
          console.log(luhn.generate(1, { pad: 12 })); // 000000000018
        </script>
      </body>
    </html>
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

- Add page with examples
- Add card number generation
