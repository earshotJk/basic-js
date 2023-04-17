const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let separator = options.separator || '+';
  let addition = options.addition === undefined ? '' : options.addition;
  let repTimes = options.repeatTimes || 1;
  let additionRepeatTimes = options.additionRepeatTimes || 1;
  let additionSeparator = options.additionSeparator || '|';

  str = String(str);
  addition = String(addition);
  let additionStr = (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition;
  let repStr = (str + additionStr + separator).repeat(repTimes - 1) + str + additionStr;

  return repStr;
}

module.exports = {
  repeater
};
