const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (!Array.isArray(members)) {
        return false
    }
    let dreamTeam = [];
    members.forEach(item => {
        if (typeof item === "string") {
            dreamTeam.push(item.trim().toUpperCase().charAt(0));
        }
    })
    return dreamTeam.sort().join('');
};