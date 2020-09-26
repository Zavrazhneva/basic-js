const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample( sampleActivity ) {

    if (typeof sampleActivity !== 'string' || sampleActivity.trim()  === '') return false
    if(sampleActivity < MODERN_ACTIVITY && sampleActivity > 0) {
        let k = 0.693 / HALF_LIFE_PERIOD;
        let t = Math.log(MODERN_ACTIVITY / +sampleActivity) / k;
        let result = Math.ceil(t);
        return Number.isFinite(result) ? false : result ;
    } else {
        return false;
    }

};