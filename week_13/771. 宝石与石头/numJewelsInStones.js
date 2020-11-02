/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  let map = new Map();
  let ans = 0;
  for(let j of J) {
    map.set(j);
  }
  
  for(let s of S) {
    if(map.has(s)) {
      ans++;
    }
  }

  return ans;
};

let J = "aA";
let S = "aAAbbbb";
console.log(numJewelsInStones(J, S));