/**
 * @param {string} s
 * @return {string}
 */
/* api */
var replaceSpace = function(s) {
  return s.split(' ').join('%20')
};

/* 
  时间复杂度：O(n)
  空间复杂度：O(n)
*/
var replaceSpace = function(s) {
  let size = 0;
  let array = [];
  for(let i = 0; i < s.length; i++) {
    if(s[i] == ' ') {
      array[size++] = '%';
      array[size++] = '2';
      array[size++] = '0';
    } else {
      array[size++] = s[i];
    }
  }

  return array.join('');
};

/* 正则 */
// var replaceSpace = function(s) {

// }


console.log(replaceSpace("We are happy."));