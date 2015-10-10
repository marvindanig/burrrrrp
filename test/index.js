var should = require('chai').should(),
    burp = require('../index'),
    eat = burp.eat;

describe('#eat', function() {
  it('converts & into space', function() {
    eat('&').should.equal(' ');
  });

  it('converts " into space', function() {
    eat('"').should.equal(' ');
  });

  it("converts ' into space", function() {
    eat("'").should.equal(' ');
  });

  it('converts < into space', function() {
    eat('<').should.equal(' ');
  });

  it('converts > into space', function() {
    eat('>').should.equal(' ');
  });
});