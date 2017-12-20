let sortArray = function (array) {
    let obj = {};
    array.forEach(function (item) {
        obj[item] = obj[item]
            ? obj[item] + 1
            : obj[item] = 1;
    });
    for (let element in obj) {
        if (obj[element] % 2 !== 0) {
            return element;
        }
    }
};

function start() {
    alert(sortArray([2, 7, 5, 7, 2, 5, 7]));
}
