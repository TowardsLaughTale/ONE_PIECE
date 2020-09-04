/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbersOld = function (nums) {
  let res = []
  nums = nums.sort((a, b) => {
    return a - b
  })

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] == nums[i] && nums[i - 1] + 1 != nums[i + 1]) {
      res.push(nums[i] + 1)
    }
  }

  return res
}

var findDisappearedNumbers = function (nums) {
  const length = nums.length
  if (!length) {
    return []
  }

  nums.forEach((num) => {
    // 将下标为 abs(num) - 1 的元素变成负数
    const absNum = Math.abs(num)
    if (nums[absNum - 1] > 0) {
      nums[absNum - 1] *= -1
    }
  })

  const res = []
  // 针对“数组下标”进行遍历
  for (let i = 1; i <= length; ++i) {
    // 如果下标 i-1 的元素是正数，说明整数 i 没出现过（要不然前面循环就变成负数了）
    if (nums[i - 1] > 0) {
      res.push(i)
    }
  }

  return res
}
