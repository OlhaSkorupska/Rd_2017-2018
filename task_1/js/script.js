let complexFunction = function () {
    return [].reduce.call(arguments, function (sum, current) {
        return sum + current;
    });
};

function cache(complexF) {
    let cacheObj = {};
    return function () {
        let parseParams = JSON.stringify(arguments);
        if (!(parseParams in cacheObj)) {
            cacheObj[parseParams] = complexF.apply(this, arguments);
        }
        return cacheObj[parseParams];
    };
}

function start() {
    let cachedFunction = cache(complexFunction);
    cachedFunction('foo', 'bar');
    cachedFunction('foo', 'bar');
    cachedFunction('foo', 'baz');
    cachedFunction('foo', 'bar');
}
