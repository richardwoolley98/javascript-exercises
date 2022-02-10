const removeFromArray = function(...args) {
    const mainArray = args[0];
    var newArray = [];
    mainArray.forEach(element => {
        if (! args.includes(element)) {
            newArray.push(element);
        }
    });
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;


