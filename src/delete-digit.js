const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newNum = [];
  let max = 0;
  n = String(n).split("");

  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length; j++) {
      if (i !== j) {
        newNum.push(n[j]);
      }
    }
    let num = Number(newNum.join(""));
    if (num > max) {
      max = num;
    }
    newNum = [];
  }
  return max;
}

module.exports = {
  deleteDigit
};
