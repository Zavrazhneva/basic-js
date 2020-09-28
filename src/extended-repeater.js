const CustomError = require("../extensions/custom-error");

module.exports =  function repeater( str, options ) {

  str = String(str);

  function converter(arr, separator ) {
    if(separator === undefined) {
      return arr.join('+')
    }
    return arr.join(separator)
  }

  function creatureArr (str = '' , current = 1, separator ) {

    str = String(str);
    let creatureArrNew = [];
    for(let i = 0; i < current; i++) {
      creatureArrNew.push(str)
    }
    return converter(creatureArrNew, separator)
  }

  let newString = str + creatureArr(options.addition, options.additionRepeatTimes, options.additionSeparator);
  let resultString = creatureArr(newString, options.repeatTimes, options.separator )

  return resultString;

};