var trap = function(height) {
  let sum = 0;
  for(let i = 1; i < height.length - 1; i++) {
    let max_left = 0;
    for(let j = i - 1; j >= 0; j--) {
      max_left = Math.max(max_left, height[j]);
    }
    let max_right = 0;
    for(let j = i + 1; j < height.length; j++) {
      max_right = Math.max(max_right, height[j]);
    }

    let min = Math.min(max_left, max_right);
    if (min > height[i]) {
      sum += (min - height[i]);
    }
  }

  console.log(sum);
  return sum
}

var trap = function(height) {
  let sum = 0;
  let max_left = new Array(height.length).fill(0);
  let max_right = new Array(height.length).fill(0);

  for(let i = 1; i < height.length - 1; i++) {
    max_left[i] = Math.max(height[i - 1], max_left[i - 1]);
  }

  for(let i = height.length - 2; i >= 0; i--) {
    max_right[i] = Math.max(height[i - 1], max_right[i - 1]);
  }

  for(let i = 1; i < height.length - 2; i++) {
    let min = Math.min(max_left[i], max_right[i]);
    if (min > height[i]) {
      sum += (min - height[i]);
    }
  }

  return sum;
}

var trap = function(height) {
  let sum = 0;
  let max_left = 0;
  let max_right = 0;
  let left = 1;
  let right = height.length - 2;

  for(let i = 1; i < height.length - 1; i++) {
    if (height[left - 1] < height[right + 1]) {
      max_left = Math.max(max_left, height[left - 1]);
      if (max_left > height[left]) {
        sum += max_left - height[left];
      }
      left++
    } else {
      max_right = Math.max(max_right, height[right + 1]);
      if (max_right > height[right]) {
        sum += max_right - height[right];
      }
      right--;
    }
  }

  console.log(sum)
  return sum;
}

let height = [0,1,0,2,1,0,1,3,2,1,2,1];
trap(height);