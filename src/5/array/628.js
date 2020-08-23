/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  var arr = nums.sort((a, b) => {
    return b - a
  })
  console.log(arr)
  //三个值全为正数或负数
  var res1 = arr[0] * arr[1] * arr[2]
  // 三个值一正两负或两正一负 [ 5, 2, -1, -3 ]
  var res2 = arr[0] * arr[arr.length - 1] * arr[arr.length - 2]
  return Math.max(res1, res2)
}
