function wordBreak(s, wordDict) {
  let len = s.length;
  const dict = new Set(wordDict);
  const memo = new Array(len);

  return dfs(0, s, dict, memo, len).map((words) => words.join(' '));
}

var dfs = function(start, s, dict, memo, len) {
  if (memo[start]) {
    return memo[start];
  }

  if (start > s.length - 1) return [[]];

  const res = [];
  for(let i = start + 1; i <= len; i++) {
    const word = s.substring(start, i);
    if (dict.has(word)) {
      const restRes = dfs(i, s, dict, memo, len);
      for(let resWord of restRes) {
        res.push([word].concat(resWord));
      }
    }
  }

  memo[start] = res;
  return res;
}