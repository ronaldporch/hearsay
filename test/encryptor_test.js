var expect = require("chai").expect;

describe("Encryptor", function() {
  var encoder = require("../js/encoder");

  it("encrypts a message", function(){
    expect(encoder.encrypt).to.be.a("function");
  });
});
