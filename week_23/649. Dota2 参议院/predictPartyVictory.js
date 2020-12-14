/**
 * @param {string} senate
 * @return {string}
 */
/* 
  记录当前阵营被 ban 人数：curBanR、curBanD（解决寻找第一距离最近敌方阵营的人的问题）
  如何判断哪方获胜
  阵营被 ban 总人数：totalBanR、totalBanD
  阵营总人数：RNumber、DNumber
*/
var predictPartyVictory = function(senate) {
  let RNumber = 0;
  let DNumber = 0;
  let curBanR = 0;
  let curBanD = 0;
  let totalBanD = 0;
  let totalBanR = 0;

  let flag = true;
  while (true) {
    for(let i = 0; i < senate.length; i++) {
      let char = senate[i];
      if (char == 'R') {
        if (flag) {
          RNumber++ // 记录R阵营的总人数Runmber+1
        }
        if (curBanR == 0) { // 说明当前这个人可以行使 ban 人的权利
          curBanD++;
          totalBanD++;
          // 最后一轮的时候，并不需要遍历到最后，在遍历的过程中，若出现了一方阵营被ban的总人数等于这一方阵容实际的总人数的时候，说明全部阵亡，提前结束遍历。
          if (totalBanD == DNumber && !flag) {
            return 'Radiant'
          };
        } else {  // 说明这个人被ban了，那么将它标记为 “r”,以说明之后他都没有权利
          curBanR--;
          delete senate[i]
        }
      } else if (char == 'D') {
        if (flag) { // 记录R阵营的总人数 DNumber+1
          DNumber++
        } 
        if (curBanD == 0) { // 说明当前这个人可以行使 ban 人的权利
          curBanR++;
          totalBanR++;
          // 最后一轮的时候，并不需要遍历到最后，在遍历的过程中，若出现了一方阵营被ban的总人数等于这一方阵容实际的总人数的时候，说明全部阵亡，提前结束遍历。
          if (totalBanR == RNumber && !flag) return 'Dire';
        } else {  // 说明这个人被ban了，那么将它标记为“d”,以说明之后他都没有权利
          curBanD--;
          delete senate[i]
        }
      }
    }
    //第一轮结束，判断 totalBanR是否大于等于 RNumber 若满足，则说明R阵营所有人都被ban了 则D阵营获胜。反之 R 阵营获胜。
    flag = false;
    if (totalBanD >= DNumber) return 'Radiant';
    if (totalBanR >= RNumber) return 'Dire';
  }
};

let res = predictPartyVictory("DRDRR");
console.log(res);