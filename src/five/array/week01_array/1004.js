/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var longestOnesV1 = function (nums, k) {
  let max = 0

  for (var j = 0; j < nums.length; j++) {
    let counter = k
    let length = 0
    for (var i = j; i < nums.length; i++) {
      if (nums[i] == 1) {
        length++
        max = Math.max(max, length)
      } else {
        if (counter > 0) {
          counter--
          length++
          max = Math.max(max, length)
        } else {
          counter = k
          break
        }
      }
    }
  }

  return max
}

var longestOnesV2 = function (A, K) {
  var left = 0, //左边的指针
    right = 0, //右边的指针
    max = 0, //最大长度
    count = 0 //记录0的个数，和K比较

  while (right < A.length) {
    //0的个数加1
    if (A[right] == 0) {
      count++
    }
    //同时右指针往右移动一位
    right++
    //每次移动后需要判断当前0的个数是否大于K，当大于K的时候
    while (count > K) {
      if (A[left] == 0) {
        //如果区间最左边是0，因为要缩减区间，把最左边剔除，0的数目count-1
        count--
      }
      //为了遍历右边元素，只能移动左边指针，所以左边指针向右移动一位
      left++
    }
    //记录区间大小
    max = Math.max(max, right - left)
  }
  return max
}

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}v3
 */
var longestOnesV3 = function (A, K) {
  var max = 0,
    left = 0,
    right = 0,
    buffer = 0
  for (var i = 0; i < A.length; i++) {
    if (A[i] == 1 && right < A.length) {
      right++
    }
    if (A[i] == 0 && buffer <= K) {
      buffer++
      right++
    }
    if (A[i] == 0 && buffer > K) {
      while (buffer > K) {
        buffer--
        left++
      }
    }
    max = Math.max(right - left, max)
  }
  return max
}
