/**
 * @param {number} k
 * @return {number}
 */
function getKthMagicNumber(k) {
  let numList = [1];
  let p3 = 0, p5 = 0, p7 = 0;

  for(let i = 1; i < k; i++) {
    numList[i] = Math.min(numList[p3] * 3, numList[p5] * 5, numList[p7] * 7);

    if (numList[i] ===  numList[p3] * 3) p3++
    if (numList[i] ===  numList[p5] * 5) p5++
    if (numList[i] ===  numList[p7] * 7) p7++
  }

  return numList[k - 1];
}