
const chainMaker = {
  value: [],
  getLength() {
    return this.value.length;
  },
  addLink(value) {
    this.value.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    const isNumber = typeof position === "number"
    if (!isNaN(+position) && isNumber && Number.isInteger(position) && this.value[position - 1]) {
      this.value.splice(position - 1, 1);
      return this;
    } else {
      this.value = []
      throw new Error();
    }
  },
  reverseChain() {
    this.value.reverse();
    return this;
  },
  finishChain() {
    const result = this.value.join('~~');
    this.value = [];
    return result
  }
};
module.exports = chainMaker;
