/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    let res = []
    if (n <= 0 || k <= 0 || n < k) {
        return res
    }

    function helper(begin = 1, temp = []) {
        if(temp.length == k) {
            res.push(temp);
            return
        }

        for(let i = begin; i <= n; i++) {
            temp.push(i);
            helper(i + 1, temp);

            temp.pop()
        }
    }

    helper();

    return res;
};

console.log(combine(4, 2))