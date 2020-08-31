/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    for(let a = 0; a * a <= c; a++) {
        let b = c - a*a;
        if (binary_search(0, b, b)) {
            return true
        }
    }
    return false
};

function binary_search(s, e, b) {
    if (s > e) {
        return false
    }

    let mid = Math.floor(s + (e - s) / 2);

    if (mid * mid == b) {
        return true
    } else if (mid * mid > b) {
        return binary_search(s, mid - 1, b);
    } else {
       return binary_search(mid + 1, e, b);
    }
}

console.log(judgeSquareSum(2))