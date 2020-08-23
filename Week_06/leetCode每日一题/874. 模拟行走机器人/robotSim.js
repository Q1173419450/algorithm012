/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
  let direX = [0, 1, 0, -1];
  let direY = [1, 0, -1, 0];

  let curX = 0, curY = 0;
  let curDire = 0;

  let comLen = commands.length;
  let ans = 0;
  let hashObstacle = {};

  for(let i = 0; i < obstacles.length; i++) {
    hashObstacle[obstacles[i][0]+'-'+obstacles[i][1]] = true;
  }

  for(let s = 0; s < comLen; s++) {
    if (commands[s] == -2) {
      curDire = (curDire + 3) % 4;
    } else if (commands[s] == -1) {
      curDire = (curDire + 1) % 4;
    } else {
      for(let z = 1; z <= commands[s]; z++) {
        let nextX = curX + direX[curDire];
        let nextY = curY + direY[curDire];

        if (hashObstacle[nextX+'-'+nextY]) {
          break;
        }

        curX = nextX;
        curY = nextY;

        ans = Math.max(ans,curX*curX+curY*curY);
      }
    }
  }
  return ans
};

console.log(robotSim([4,-1,3], []))