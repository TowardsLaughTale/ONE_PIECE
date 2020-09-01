// 给定一个非空数组，返回此数组中第三大的数。如果不存在，则返回数组中最大的数。要求算法时间复杂度必须是O(n)。
/**
 * @param {number[]} nums
 * @return {number}
 */
let thirdMax = function (nums) {
    // 先将数组去重，然后倒序排序，如果结果数组length大于3，则返回第三个，如果小于三则返回第一个
  let newArr = [...new Set(nums)].sort((a, b) => b - a);
  return newArr.length>=3? newArr[2]:newArr[0]
};
console.log(thirdMax([2, 3, 3, 2, 2, 4, 1]));
     