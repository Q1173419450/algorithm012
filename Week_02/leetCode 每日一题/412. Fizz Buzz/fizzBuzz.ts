// function fizzBuzz(n: number): string[] {
//   let arr = [];
//   for(let i = 1; i <= n; i++) {
//       if (i % 5 === 0 && i % 3 === 0) {
//           arr.push('FizzBuzz')
//       } else if (i % 3 === 0) {
//           arr.push('Fizz')
//       } else if (i % 5 === 0) {
//           arr.push('Buzz');
//       } else {
//           arr.push(i .toString())
//       }
//   } 

//   return arr
// };

/* 
  这个方法不会降低渐进复杂度，但是当 FizzBuzz 的规则变得更复杂的时候，这将会是个更优雅的解法。比方说，玩个 FizzBuzzJazz 的游戏。规则如下：
  3 ---> "Fizz" , 5 ---> "Buzz", 7 ---> "Jazz"
  如果 FizzBuzz 照着这种方式变地更复杂的话，那么你要写的判断可能会让你抓狂。

  我们放弃使用之前的联合判断，取而代之依次判断是否能被给定的数整数。这道题中，就是依次判断能不能被 3 整除，能不能被 5 整除。如果能被 3 整除，就把对应的 Fizz 连接到答案字符串，如果能被 5 整除，就把 Buzz 连接到答案字符串。
*/

function fizzBuzz(n: number): string[] {
  let arr = [];
  for(let i = 1; i <= n; i++) {
    let divisibleBy3 = (i % 3 === 0 );
    let divisibleBy5 = (i % 5 === 0 );

    let numAnsStr = '';
    if (divisibleBy3) {
      numAnsStr += 'Fizz'
    }

    if (divisibleBy5) {
      numAnsStr += 'Buzz'
    }

    if (numAnsStr === '') {
      numAnsStr += i .toString()
    }

    arr.push(numAnsStr);
  }

  return arr
};

console.log(fizzBuzz(1))