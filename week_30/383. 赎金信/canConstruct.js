/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;
  let map = new Map();
  for(const m of magazine) {
    if (map.has(m)) {
      let num = map.get(m);
      map.set(m, num + 1);
    } else {
      map.set(m, 1);
    }
  }

  for(const r of ransomNote) {
    if (map.has(r)) {
      let num = map.get(r);
      if (num <= 0) return false
      map.set(r, num - 1);
    } else {
      return false
    }
  }
  return true;
}