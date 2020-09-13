/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let res = [];

    const dfs = (target, begin = 0, temp = []) => {
        if (begin == candidates.length) {
            return
        }

        if (target == 0) {
            res.push(temp.slice())
            return
        }

        dfs(target, begin + 1, temp);

        if (target - candidates[begin] >= 0) {
            dfs(target - candidates[begin], begin, [...temp, candidates[begin]])
        }
    }
    dfs(target);

    return res
};

let candidates = [2,3,6,7], target = 7;

console.log(combinationSum(candidates, target))