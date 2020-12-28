var foo = (nums, man) => {
  let sum = 0;
  let current = 1;
  while (current < nums) {
    current += current < man ? current : man
    sum += 1;
  }

  return sum;
}

var res = foo(20, 3);
console.log(res);