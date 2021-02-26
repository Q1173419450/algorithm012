/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let hash = new Map();
var encode = function (longUrl) {
  let chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ-~'.split('');
  let radix = chars.length;
  qutient = 10000000000;
  let arr = [];


  // 网上比较流行的短网址算法有两种 自增序列算法、 摘要算法。
  // 自增序列
  do {
    mod = qutient % radix;
    qutient = (qutient - mod) / radix;
    arr.unshift(chars[mod])
  } while (qutient);

  hash.set(arr.join(''), longUrl);

  console.log(arr);
  return 'http://tinyurl.com/' + arr.join('');
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  shortUrl = shortUrl.replace(/http:\/\/tinyurl\.com\//,'')
  return hash.get(shortUrl)
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */