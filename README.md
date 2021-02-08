# Crypto-npm

Crypto-npm is a small NPM Package to encrypt and decrypt arbitrary length messages via a pseudorandom functions.

## Installation

Use the package manager [npm](https://www.npmjs.com/get-npm) to install crypto-npm.

```bash
npm install crypto-npm
```

## Usage

```javascript
const { getKey, encrypt, decrypt } = require("crypto-npm");

const message = "The secret message";
const key = getKey("the seed", message.length);
const encrypted = encrypt(message, key);
const decrypted = decrypt(encrypted, key);
assert(message === decrypted);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[BSD 3-Clause License](https://choosealicense.com/licenses/bsd-3-clause/)
