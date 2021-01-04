var elegantIpAddress = () => {
  let ans = new Array();
  let ip = new Array(4).fill(0);

  for(let mask = 0; mask < (1 << 16); mask++) {
    for(let i = 15; i >= 8; i--) {
      ip[0] = ip[0] * 2 + ((mask >> i) & 1);
    }
    for(let i = 7; i >= 0; i--) {
      ip[1] = ip[1] * 2 + ((mask >> i) & 1);
    }
    for(let i = 0; i <= 7; i++) {
      ip[2] = ip[2] * 2 + ((mask >> i) & 1);
    }
    for(let i = 8; i <= 15; i++) {
      ip[3] = ip[3] * 2 + ((mask >> i) & 1);
    }

    const digit = new Array(10).fill(0);
    let ones = 0;
    let check = true;
    for(let num of ip) {
      while (num) {
        const x = num % 10;
        if (digit[x]) {
          check = false;
          break;
        }
        digit[x] = true;
        ones++
        num = Math.floor(num / 10);
      }
      if (!check) break;
    }
    if (check && ones == 10) {
      const valid = []
      for(let i = 0; i < 4; i++) {
        valid.push(ip[i]);
        if (i < 3) {
          valid.push('.')
        }
      }
      console.log(ans);
      ans.push(valid.join(''));
    }
  }
  return ans;
}

let res = elegantIpAddress();
console.log(res);