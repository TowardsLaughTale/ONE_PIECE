/**
 * @param {number[]} nums
 * @return {number}
 */
// 1. 暴力解法：找到最大元素和最小元素，每次循环数组元素除最大元素外加1，移动次数加1
// 直至最小元素和最大元素相等
// 2. 先排序，为了方便取得最大值和最小值，要移动的次数即是各次diff值的和
// diff=a[n-1]-a[0]
// a1[0]=a[n-1]-a[0]+a[0]=a[n-1] a1[1]=a[n-1]-a[0]+a[1] a1[2]=a[n-1]-a[0]+a[2] a1[n-2]=a[n-1]-a[0]+a[n-2]
// diff=a1[n-2]-a1[0] = (a[n-1]-a[0]+a[n-2])-a[n-1]=a[n-2]-a[0]
// a2[0]= a[n-2]-a[0]+a[n-1]
// a2[1]= a[n-2]-a[0]+a[n-1]-a[0]+a[1]
// a2[2]= a[n-2]-a[0]+a[n-1]-a[0]+a[2]
// diff=a2[n-3]-a2[0]=a[n-2]-a[0]+a[n-1]-a[0]+a[n-3]-(a[n-2]-a[0]+a[n-1])=a[n-3]-a[0]
//根据规律可得 diff总和就是a[n-1]-a[0]+a[n-2]-a[0]+a[n-3]-a[0]+....+a[1]-a[0]
var minMoves = function (nums) {
  nums.sort((a, b) => {
    return a - b
  })
  let count = 0
  for (let i = nums.length - 1; i > 0; i--) {
    count += nums[i] - nums[0]
  }
  return count
}
