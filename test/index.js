var should = require('chai').should(),
    burrrrrp = require('../index'),
    eat = burrrrrp.eat;

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