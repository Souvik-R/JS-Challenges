
function generateFibonacci(n) {
    const fibSeries = [0, 1];

    for (let i = 2; i < n; i++) {
        fibSeries[i] = fibSeries[i - 1] + fibSeries[i - 2];
    }

    return fibSeries;
}

const result = generateFibonacci(10);
console.log(result); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]