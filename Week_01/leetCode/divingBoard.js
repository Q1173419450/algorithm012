/**
 * 16.11. 跳水板
 * 你正在使用一堆木板建造跳水板。有两种类型的木板，其中长度较短的木板长度为shorter，长度较长的木板长度为longer。你必须正好使用k块木板。编写一个方法，生成跳水板所有可能的长度。
 * @param {number} shorter
 * @param {number} longer
 * @param {number} k
 * @return {number[]}
 */
// 两块木板的总数是k，如果其中一种木板数量为m，那么另一种木板的数量就是k-m；
var divingBoard = function(shorter, longer, k) {
  if (k === 0) {
    return []
  }

  if(shorter == longer) {
    return [shorter * k]
  }

  let lengths = [];
  for(let i = 0; i <= k; i++) {
    lengths[i] = shorter * (k - i) + longer * i;
  }

  return lengths;
};