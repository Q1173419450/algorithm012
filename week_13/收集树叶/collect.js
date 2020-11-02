function minimumOperations(leaves) {
  if (leaves == null || leaves == '') return 0;

  let len = leaves.length;
  let charArr = leaves.split("");
  let state = Array.from({
    length: len
  }, () => new Array(3).fill(0));

  state[0][0] = charArr[0] == 'y' ? 1 : 0;
  state[0][1] = state[0][1] = state[1][2] = Infinity;

  let isYellow = 0;
  for (let i = 1; i < len; i++) {
    isYellow = charArr[i] == 'y' ? 1 : 0;
    state[i][0] = state[i - 1][0] + isYellow;
    state[i][1] = Math.min(state[i - 1][0], state[i - 1][1]) + (1 - isYellow);
    if (i > 1) { // 右半部分 的叶子 必须是第2个元素之后的元素
      state[i][2] = Math.min(state[i - 1][1], state[i - 1][2]) + isYellow;
    }
  }

  return state[length - 1][2];
}