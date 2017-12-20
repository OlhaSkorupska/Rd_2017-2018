let complexFunction = function (arg1, arg2) {
    return arg1 + arg2;
};

function cache(complexF) {
    let cacheObj = {};
    return function (param1, param2) {
        let result = '';
        if (!(cacheObj.param1 === param1 && cacheObj.param2 === param2)) {
            cacheObj = {param1: param1, param2: param2};
            result = complexF.call(this, param1, param2);
        } else {
            result = complexF.call(this, cacheObj.param1, cacheObj.param2);
        }
        return result;
    };
}

function start() {
    let cachedFunction = cache(complexFunction);
    cachedFunction('foo', 'bar');
    cachedFunction('foo', 'bar');
    cachedFunction('foo', 'baz');
    cachedFunction('foo', 'bar');
}
