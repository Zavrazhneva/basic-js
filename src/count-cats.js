const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
    return backyard.reduce((acc, item) => {
        item.forEach(item => {
            if (item === '^^') {
                acc += 1
            }
        })
        return acc;
    }, 0)
};
