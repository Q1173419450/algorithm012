/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// https://leetcode-cn.com/problems/subsets/solution/hui-su-si-xiang-tuan-mie-pai-lie-zu-he-zi-ji-wen-t/
var subsets = function(nums) {
    let res = [];

    function helper(temp, start) {
        res.push(temp.slice());
        for(let i = start; i < nums.length; i++) {
            temp.push(nums[i]);
    
            helper(temp.slice(), i + 1);
    
            temp.pop();
        }
    }

    helper([], 0);

    return res;
};

/* 模板2 */
var subsets = function(nums) {
    let res = [];

    helper(nums, res, [], 0);

    return res;
};

function helper(nums, res, temp, start) {
    if (start === temp.length) {
        res.push(temp.slice());
        return
    }

    /* 从头到尾都不选 */
    helper(nums, res, temp, start + 1);

    /* 选了，然后回溯 */
    temp.push(nums[start]);
    helper(nums, res, temp, start + 1);

    temp.pop();
}

/* 迭代 */
/* https://leetcode-cn.com/problems/subsets/solution/78-zi-ji-by-alexer-660/ */
var subsets = function(nums) {
    let res = [[]];

    for(let i = 0; i < nums.length; i++) {
        let len = res.length;
        for(let j = 0; j < len; j++) {
            // let sub = res[j].slice();
            // sub.push(nums[i]);
            // res.push(sub);
            res.push([...res[j], nums[i]]);
        }
    }

    return res;
}

/* 位运算 */
// https://leetcode-cn.com/problems/subsets/solution/er-jin-zhi-wei-zhu-ge-mei-ju-dfssan-chong-si-lu-9c/