

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

console.log(dataArray);
