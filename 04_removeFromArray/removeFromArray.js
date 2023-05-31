const removeFromArray = function (theArray, ...items) {
    const temp = [];
    let flag = false;
    for (const arrayItem of theArray) {
        flag = false;
        for (const item of items) {

            if (arrayItem === item) {
                flag = true;
            }
        }
        if (flag === false) {
            temp.push(arrayItem);
        }
//        console.log(`the array = ${temp}`);
    }
    return temp;

}


// Do not edit below this line
module.exports = removeFromArray;
