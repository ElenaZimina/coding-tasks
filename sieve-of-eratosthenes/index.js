function getPrimes(n) {
    const arr = new Array(n + 1).fill(true);
    arr[0] = arr[1] = false;

    for (let i = 2; i < Math.sqrt(arr.length - 1); i++) {
        if (arr[i]) {
            for (let j = Math.pow(i, 2); j < n + 1; j = j + i) {
                arr[j] = false;
            }
        }
    }

    return arr;
}

console.log(getPrimes(36).reduce((acc, i, index) => {
    if (i) {
        acc.push(index);
    }
    return acc;
}, []));



