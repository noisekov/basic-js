const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (val) {
      this.type = val || false;
  }
  encrypt(mes, key) {
    // throw new NotImplementedError('Not implemented');
    if (mes === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    } else {
      return mes.toUpperCase();
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(mes, key) {
    // throw new NotImplementedError('Not implemented');
    if (mes === undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    } else {
      return mes.toUpperCase();
    }
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  VigenereCipheringMachine
};
