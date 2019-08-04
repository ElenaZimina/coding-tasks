/**
 * Returns an array of all the prime numbers which are less than parameter 'n'
 */
function getPrimes(n) {
    const arr = new Array(n + 1).fill(true);
    arr[0] = arr[1] = false;

    /** Fill the values with not-prime indexes with 'false', so only prime indexes are staying 'true' */
    for (let i = 2; i < Math.sqrt(arr.length - 1); i++) {
        if (arr[i]) {
            for (let j = Math.pow(i, 2); j < n + 1; j = j + i) {
                arr[j] = false;
            }
        }
    }

    return arr.map((i, index) => i && index).filter((j) => j);
}
