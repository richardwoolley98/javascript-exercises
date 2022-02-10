const reverseString = function(string) {
    const splitString = string.split("");
    const reverseString = splitString.reverse();
    const finalString = reverseString.join("");
    return finalString;
};

// Do not edit below this line
module.exports = reverseString;
