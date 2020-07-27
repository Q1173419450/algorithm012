## 50. Pow(x, n)

快速幂

- 负数

```js
pow(num, power) = 1 / num * pow(num, -(power + 1));
```

- 正数

```js
// 偶数
pow(num, power) = pow(num * num, power - 1);

// 奇数
pow(num, power) = num * pow(num, power - 1);
```