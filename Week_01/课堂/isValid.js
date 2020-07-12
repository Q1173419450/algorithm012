var isValid = function(s) {
  if (s.length % 2 != 0) {
    return false
  }
  let paris = {
    "(": ")",
    "{": "}",
    "[": "]"
  }

  let open = [];
  for(let i = 0; i < s.length; i++) {
    if (s[i] in paris) {
      open.push(s[i]);
    } else {
      let current = open.pop()
      if (paris[current] != s[i]) {
        return false
      }
    }
  }

  return open.length === 0;
}