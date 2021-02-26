/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function(dominoes) {
  let count = 0;
  for(let i = 0; i < dominoes.length - 1; i++) {
    for(let j = i + 1; j < dominoes.length; j++) {
      if (dominoes[i][0] === dominoes[j][0] && dominoes[i][1] === dominoes[j][1]) {
        count++;
      } else if (dominoes[i][0] === dominoes[j][1] && dominoes[i][1] === dominoes[j][0]) {
        count++;
      }
    }
  }
  return count;
};

var numEquivDominoPairs = function(dominoes) {
  let ans = 0;
  let d =  new Map();

  for(let i = 0; i < dominoes.length; i++) {
    let num = dominoes[i][0] > dominoes[i][1] ? dominoes[i][0] * 10 + dominoes[i][1] : dominoes[i][1] * 10 + dominoes[i][0];
    if(d.has(num)) {
      d.set(num, d.get(num) + 1);
    } else {
      d.set(num, 1);
    }
  }

  for(let value of d.values()) {
    ans += value * (value - 1) / 2; // 等差求和公式
  }
  return ans;
}