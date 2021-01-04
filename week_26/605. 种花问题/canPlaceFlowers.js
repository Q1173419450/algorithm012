/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
/* 给出的花盆数组不会重复插花 */
var canPlaceFlowers = function(flowerbed, n) {
  for(let i = 0; i < flowerbed.length; i += 2) {
    if (flowerbed[i] == 0) {
      if (i == flowerbed.length - 1 || flowerbed[i + 1] == 0) {
        n--
      } else {
        i++
      }
    }
  }
  return n <= 0;
};