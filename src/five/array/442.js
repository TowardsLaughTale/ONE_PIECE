/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let res = []
  nums = nums.sort((a, b) => {
    return a - b
  })

  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] == nums[i]) {
      res.push(nums[i])
    }
  }

  return res
}
