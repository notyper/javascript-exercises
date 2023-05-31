const sumAll = function (int1, int2) {
    if (!Number.isInteger(int1) 
     || !Number.isInteger(int2) 
     ||  (int1 < 0 || int2 < 0)) {
        return "ERROR"
    }

    let sum = 0
    let count = Math.min(int1, int2);
    let highest = Math.max(int1, int2);

    do {
        sum += count++;
    } while (count <= highest);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
