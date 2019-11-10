"use strict";

exports.times = (a, b) => {
  if (a >= 10) {
    return (a - 9) * b;
  } else {
    return a * b;
  }
};

exports.switch = input => {
  switch (input) {
    case 1:
      return "one";
    case 2:
      return "two";
    case 3:
      return "three";
    case 4:
      return "four";
    default:
      return "unknown";
  } // end switch
};

exports.pow = (num, pow) => num ** pow;



