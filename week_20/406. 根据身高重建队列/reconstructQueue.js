/**
 * @param {number[][]} people
 * @return {number[][]}
 */
/* 一个人的 k 值实际上与身高更矮的人的位置无关 */
var reconstructQueue = function(people) {
  people = people.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : b[0] - a[0]);
  console.log(people);
  let list = [];
  for(let p of people) {
    list.splice(p[1], 0, p);
    console.log(list)
  }

  console.log(list)
  return list
};