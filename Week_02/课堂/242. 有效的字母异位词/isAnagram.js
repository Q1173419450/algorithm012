// function isAnagram(s: string, t: string): boolean {
//   if (s.length != t.length) {
//     return false
//   }
//   let first: string = s.split('').sort((a, b) => a.localeCompare(b)).join('');
//   let second: string = t.split('').sort((a, b) => a.localeCompare(b)).join('');
//   return first === second
// };

/* hash 映射 */
var isAnagram = function(s, t) {
    const map = new Map()
    for(let i = 0; i < s.length; i++) {
        const getMap = map.get(s[i]);
        if (!getMap) {
            map.set(s[i], 1)
        } else {
            map.set(s[i], getMap + 1)
        }
    }

    for(let i = 0; i < t.length; i++) {
        const getMap = map.get(t[i]);
        if (getMap === 1) {
            map.delete(t[i])
        } else if (getMap) {
            map.set(t[i], getMap - 1);
        } else {
            map.set(t[i], 1);
        }
    }

    if (map.size) {
        return false
    } else {
        return true;
    }
}

console.log(isAnagram('anagram', 'nagaram'));