let sortArray = function (array) {
    let obj = {};
    array.forEach(function (item) {
        obj[item] = obj[item]
            ? obj[item] + 1
            : obj[item] = 1;
    });
    let foundNumber = 0;
    for (let element in obj) {
        if (obj[element] % 2 !== 0) {
            foundNumber = element;
        }
    }
    return foundNumber;
};

function start() {
    alert(sortArray([2, 7, 5, 7, 2, 5, 7]));
}
