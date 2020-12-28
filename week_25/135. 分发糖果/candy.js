/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
  if (!ratings.length) return 0;
  let left = new Array(ratings.length).fill(1);
  let right = 1;
  for(let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) left[i] = left[i - 1] + 1;
  }

  let count = left[left.length - 1];
  for(let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      right++
    } else {
      right = 1;
    }
    count += Math.max(left[i], right);
  }
  return count
};