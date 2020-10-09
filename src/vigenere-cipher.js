const CustomError = require("../extensions/custom-error");
const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numberAlphabetLetters = 26;

class VigenereCipheringMachine {
  constructor(reverse = true){
    this.isReverse = reverse
  }

  encrypt(message, key) {
    return this.stringComputation(message, key, 'encrypt')
  }

  decrypt(message, key) {
    return this.stringComputation(message,key, 'decrypt')
  }

  letterFindIndex(letter) {
    let letterIndex =  alphabet.findIndex(item => item === letter);
    if(letterIndex === -1) return letter;
    return letterIndex;
  }
  resultString(arr) {
    return arr.join('').toUpperCase();
  }

  stringComputation(message, key, type)  {
    if(message === undefined || key === undefined) throw new Error();
    message = message.toLowerCase();
    key = key.toLowerCase();
    let newArr = [];
    let keyCurrent = 0;
    for(let i = 0; i <= message.length -1; i++) {
      if(key[keyCurrent] === undefined) keyCurrent = 0;
      let messageIndex = this.letterFindIndex(message[i]);
      let keyIndex = this.letterFindIndex(key[keyCurrent]);
      ++keyCurrent;
      if(message[i] === ' ') {
        keyCurrent -= 1;
        newArr.push(' ');
      } else {
        if(typeof messageIndex !== "number") newArr.push(messageIndex);
        else {
          if(type === 'decrypt') {
            newArr.push(alphabet[(messageIndex + numberAlphabetLetters - keyIndex) % numberAlphabetLetters]);
          } else if (type === 'encrypt') {
            newArr.push(alphabet[(messageIndex + keyIndex) % numberAlphabetLetters]);
          }
        }
      }
    }
    return !this.isReverse ? this.resultString(newArr.reverse()) : this.resultString(newArr);
  }
}
module.exports = VigenereCipheringMachine;
