module.exports = class DepthCalculator {

  calculateDepth( arr ) {
    if(!Array.isArray(arr)) {
      return 0;
    }
    const depth = arr.reduce((acc,item) => {
      return Math.max(acc , this.calculateDepth(item))
    }, 0)
    return depth + 1
  }
};