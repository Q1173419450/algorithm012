/**
 * @param {number[][]} clips
 * @param {number} T
 * @return {number}
 */
var videoStitching = function(clips, T) {
  let dp = new Array(T + 1).fill(Infinity);
  dp[0] = 0;
  for(let i = 1; i <= T; i++) {
    for(let clip of clips) {
      if (clip[0] < i && clip[1] >= i) {
        dp[i] = Math.min(dp[i], dp[clip[0]] + 1);
      }
    }
  }

  return dp[T] == Infinity ?  -1 : dp[T]
};

let clips = [[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]];
let T = 10;
videoStitching(clips, T);