/* 对象 hash map */
function firstUniqChar(s) {
  if (!s) return -1;
  let map = {};

  for(const str of s) {
    map[str] = map[str] ? map[str] + 1 : 1;
  }

  for(let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) return i;
  }
  return -1;
}

/* 数组 hash map */
function firstUniqChar(s) {
  if (!s) return -1;
  let map = new Array(26).fill(0);
  let n = s.length;

  for(let i = 0; i < n; i++) {
    map[s.charCodeAt(i) - 'a'.charCodeAt(0)] += 1;
  }
  
  for(let i = 0; i < n; i++) {
    if(map[s.charCodeAt(i) - 'a'.charCodeAt(0)] == 1) {
      return i;
    }
  }
  return -1;
}

/* 队列 */
function firstUniqChar(s) {
  let map = {};
  let q = [];
  let n = s.length;
  for(let [i, ch] of Array.from(s).entries()) {
    if (!map[ch]) {
      map[ch] = i;
      q.push([s[i], i]);
    } else {
      map[ch] = -1;
      while (q.length && map[q[0][0]] == -1) {
        q.shift();  // 出现超过一次则放弃掉
      }
    }
  }
  return q.length ? q[0][1] : -1;
}

let s = "leetcode";
firstUniqChar(s);