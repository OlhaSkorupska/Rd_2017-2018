let sum = function () {
    return [].reduce.call(arguments, function (arg1, arg2) {
        return arg1 + arg2;
    });
};

let mul = function () {
    return [].reduce.call(arguments, function (arg1, arg2) {
        return arg1 * arg2;
    });
};

function applyAll(func, ...args) {
    return func.call(this, ...args);
}

function start() {
    applyAll(sum, 1, 2, 3, 4, 5);
    applyAll(mul, 2, 3, 4, 5, 6);
}
