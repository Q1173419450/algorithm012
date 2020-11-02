/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(S) {
  let last = new Array(26).fill(0);
  let len = S.length;
  let codePointA = 'a'.codePointAt(0);
  for(let i = 0; i < len; i++) {
    last[S.codePointAt(i) - codePointA] = i;
  }

  console.log(last);
  const ans = [];
  let start = 0, end = 0;
  for(let i = 0; i < len; i++) {
    end = Math.max(end, last[S.codePointAt(i) - codePointA]);
    console.log(end)
    if(i == end) {
      ans.push(end - start + 1);
      start = end + 1;
    }
  }

  console.log(ans)
  return ans;
};

partitionLabels('ababcbacadefegdehijhklij')