// Polyfills of MAP function

const arr = [2, 3, 5, 7, 9];

Array.prototype.myMap = function (callback) {
    let results = [];
    this.forEach((item, index, array) => {
        results.push(callback(item, index, array));
    });
    return results;
};

const dataArray = arr.myMap((item) => {
    return item * 2;
});

// console.log(dataArray);

// Polyfills of Promise.all function
Promise.myPromiseAll = function (promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Argument must be an array"));
        };

        const results = [];
        let completed = 0;

        if (promises.length == 0) {
            return resolve([]);
        };

        promises.forEach((promise, i) => {
            Promise.resolve(promise).then((value) => {
                results[i] = value;
                completed++;

                if (completed == results[i]) {
                    resolve(results);
                };
            }).catch(err => reject(err));
        });
    })
}

// Polyfills of Momoize function
function memoize(fn) {
    const cache = {};

    return function (args) {

        if (cache[args]) {
            return cache[args];
        };
        const result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}



