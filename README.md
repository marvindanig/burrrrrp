Burp
=========

A small library providing utility methods to `escape` and eat HTML entities

## Installation

>  npm install burp --save

## Usage

```
  var burp = require('burp')
      eat = burp.eat;

  var html = '<h1>Hello World</h1>',
      burped = eat(html);

  console.log('html', html, 'burped', burped);
```

## Tests

>  npm test

## Contributing

Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release