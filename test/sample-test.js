"use strict";

const expect = require("chai").expect;
const sample = require("../index.js");

describe("Sample Test Script", function() {
  describe("times()", function() {
    it("should equal 10", function() {
      expect(sample.times(2, 5)).to.equal(10);
    });

    it("should equal 6", function() {
      expect(sample.times(3, 2)).to.equal(6);
    });

    it("should equal 25", function() {
      expect(sample.times(5, 5)).to.equal(25);
    });

    it("should equal 5", function() {
      expect(sample.times(10, 5)).to.equal(5);
    });
  });

  describe("switch()", function() {
    it('should return "one"', function() {
      expect(sample.switch(1)).to.equal("one");
    });

    it('should return "two"', function() {
      expect(sample.switch(2)).to.equal("two");
    });

    it('should return "three"', function() {
      expect(sample.switch(3)).to.equal("three");
    });

    it('should return "four"', function() {
      expect(sample.switch(4)).to.equal("four");
    });

    it('should return "unknown"', function() {
      expect(sample.switch(5)).to.equal("unknown");
    });
  });

  describe("pow()", function() {
    it("should return 8", function() {
      expect(sample.pow(2, 3)).to.equal(8);
    });
  });
});








