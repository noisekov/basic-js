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
  // throw new NotImplementedError('Not implemented');
  let newStr = `${str}`;

  if (options.addition) {
    let whatAddToStr = '';
    whatAddToStr += `${options.addition}`;
    if (options.additionSeparator && options.repeatTimes > 1) {
      whatAddToStr += `${options.additionSeparator}`;
    }
    if (options.additionRepeatTimes > 1) {
      newStr += whatAddToStr.repeat(options.additionRepeatTimes)
      newStr = newStr.substring(newStr.length-options.additionSeparator.length, options.additionSeparator)
    } else {
      newStr += whatAddToStr
    }
  }
  if (!options.separator) {
    newStr +='+';
  } else {
    newStr += `${options.separator}`;
  }
  if (options.repeatTimes) {
    newStr = newStr.repeat(options.repeatTimes);
  }
  if (options.separator) {
    return newStr.substring(0, newStr.length - `${options.separator.length}`);
  } else {
    return newStr.substring(0, newStr.length - 1);
  }
}

module.exports = {
  repeater
};
