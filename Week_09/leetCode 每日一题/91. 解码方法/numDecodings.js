/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    return getAns(s, 0);
};

function getAns(s, start) {
    if(start == s.length) {
        return 1;
    }

    if (s.charAt(start) == '0') {
        return 0;
    }

    let ans1 = getAns(s, start + 1);
    let ans2 = 0;

    if (start < s.length - 1) {
        let ten = (s.charAt(start) - '0') * 10;
        let one = s.charAt(start + 1) - '0';

        if (ten + one <= 26) {
            ans2 = getAns(s, start + 2);
        }
    }

    return ans1 + ans2
}

/* 记忆化递归 */
var numDecodings = function(s) {
    let memo = new Map();
    return getAns(s, 0, memo);
};

function getAns(s, start, memo) {
    if (start == s.length) return 1;
    if (s.charAt(start) === '0') return 0;
    if (memo.has(start)) {
        return memo.get(start)
    }

    let ans1 = getAns(s, start + 1, memo);
    let ans2 = 0;
    if (start < s.length - 1) {
        let ten = (s.charAt(start) - '0') * 10
        let one = s.charAt(start + 1) - '0';
        if (ten + one <= 26) {
            ans2 = getAns(s, start + 2, memo);
        }
    }
    memo.set(start, ans1 + ans2);
    return ans1 + ans2;
}