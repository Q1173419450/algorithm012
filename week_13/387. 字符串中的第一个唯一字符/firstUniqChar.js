function firstUniqChar(s) {
  if (s == null || s == '') return -1;

  let map = new Map();

  for(let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      let node = map.get(s[i]) + 1;
      console.log(node)
      map.set(s[i], node);
    } else {
      map.set(s[i], 1);
    }
  }

  for(let i = 0; i < s.length; i++) {
    if (map.get(s[i]) == 1) {
      return i;
    }
  }

  return -1
}