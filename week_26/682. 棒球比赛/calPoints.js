/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  if (ops.length === 0) return 0;
  let stack = [];

  for(const node of ops) {
    if (node == '+') {
      let num = stack[stack.length - 1] + stack[stack.length - 2]
      stack.push(num);
    } else if (node == 'C') {
      stack.pop();
    }  else if (node == 'D') {
      stack.push(stack[stack.length - 1] * 2);
    } else {
      stack.push(Number(node));
    }
  }
  let ans = 0
  for(let i = 0; i < stack.length; i++) {
    ans += stack[i];
  }
  return ans;
};

let ops = ["5","2","C","D","+"]
calPoints(ops);

var calPoints = function(ops) {
  let stack = [];
  let ans = 0;

  for(let op of ops) {
    if (op === '+') {
      let top = stack.pop();
      let newtop = top + stack[stack.length - 1];
      let temp = top + newtop;
      stack.push(top);
      ans += stack.push(temp);
    } else if (op === 'C') {
      ans -= stack.pop();
    } else if (op === 'D') {
      ans += stack.push(stack[stack.length - 1] * 2);
    } else {
      stack.push(Number(op));
      ans += Number(op)
      console.log(ans);
    }
  }

  console.log(stack)

  return ans;
}