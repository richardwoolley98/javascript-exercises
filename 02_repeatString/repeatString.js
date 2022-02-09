const repeatString = function(string, num) {
    if (num >= 0) {
        var emptyString = "";
        for (let i = 0; i < num; i++) {
            emptyString = emptyString.concat(string);
        }
        return emptyString;
    }
    else
        return "ERROR"

};
// Do not edit below this line
module.exports = repeatString;


