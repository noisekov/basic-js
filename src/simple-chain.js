const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
  },
  addLink: function(value) {
      if (value === undefined) {
        this.arr.push(`~()~`)
      } else {
        this.arr.push(`~( ${value} )~`);
      }
      return this;
  },
  removeLink: function(position) {
      if (position <= 0 || position > this.arr.length || !Number.isInteger(position) || typeof(position) !== 'number') {
        this.arr.length = 0;
        throw new Error ("You can't remove incorrect link!");
      }
      this.arr.forEach((x, i) => {
        if(i+1 === position) {
          this.arr.splice(i, 1);
        }
      })
      return this;
  },
  reverseChain: function() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let resultArr = this.arr.join('').slice(1, -1);
    this.arr.length = 0;
    return resultArr;
  }
};

module.exports = {
  chainMaker
};