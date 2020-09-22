module.exports = function getSeason(date) {
    if (!date) {
        return 'Unable to determine the time of year!';
    }

    if (!(date instanceof Date)) {
        throw new Error('Not date');
    }

    if (date.toString !== Date.prototype.toString) {
        throw new Error('Duck date');
    }
    const month = date.getMonth() + 1;
    const spring = month >= 3 && month <= 5;
    const summer = month >= 6 && month <= 8;
    const autumn = month >= 9 && month <= 11;
    const winter = month === 12 || month <= 2;
    if (spring) {
        return 'spring';
    } else if (summer) {
        return 'summer'
    } else if (autumn) {
        return 'autumn'
    } else if (winter) {
        return 'winter'
    }
};
