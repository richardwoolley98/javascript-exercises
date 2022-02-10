const sumAll = function(first, last) {
    if (first < 0 || last < 0) {
        return "ERROR";
    }
    else if (typeof first != "number" || typeof last != "number") {
        return "ERROR";
    }
    else {
    var finalSum = 0;
    if (last > first) {
        for (i = first; i <= last; i++) {
            finalSum += i;
        }
    }
    else {
        for (i = last; i <= first; i++) {
            finalSum += i;
        }
    }
    return finalSum;
    }
};

// Do not edit below this line
module.exports = sumAll;
