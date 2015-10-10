burrrrrp
=========

A small library that chews on HTML entities!

## Installation

>  npm install burrrrrp --save

## Usage

```
  var burrrrrp = require('burrrrrp')
      eat = burrrrrp.eat;

  var html = '<h1>Hello World</h1>',
      burrrrrped = eat(html);

  console.log('html', html, 'burrrrrped', burrrrrped);
```

## Tests

>  npm test

## Contributing

Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release