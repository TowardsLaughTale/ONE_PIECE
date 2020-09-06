/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  if (nums.length < 3) {
    return -1;
  }
  let arr = nums.filter((num) => num <= 0).sort((a, b) => a - b);
  let brr = nums.filter((num) => num > 0).sort((a, b) => a - b);
  if (brr.length === 0) {
    return arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
  }
  if (brr.length === 1) {
    return brr[0] * arr[0] * arr[1];
  }
  if (brr.length === 2) {
    if (arr.length >= 2) {
      return Math.max(brr[0] * brr[1] * arr[0], brr[1] * arr[0] * arr[1]);
    } else {
      return brr[0] * brr[1] * arr[0];
    }
  }
  if (arr.length >= 2) {
    return Math.max(
      brr[brr.length - 1] * brr[brr.length - 2] * brr[brr.length - 3],
      brr[brr.length - 1] * arr[0] * arr[1]
    );
  } else {
    return brr[brr.length - 1] * brr[brr.length - 2] * brr[brr.length - 3];
  }
};
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  if (nums.length < 3) {
    return -1;
  }
  let arr = nums.filter((num) => num <= 0).sort((a, b) => a - b);
  let brr = nums.filter((num) => num > 0).sort((a, b) => a - b);
  if (brr.length === 0) {
    return arr[arr.length - 1] * arr[arr.length - 2] * arr[arr.length - 3];
  }
  if (brr.length === 1) {
    return brr[0] * arr[0] * arr[1];
  }
  if (brr.length === 2) {
    if (arr.length >= 2) {
      return Math.max(brr[0] * brr[1] * arr[0], brr[1] * arr[0] * arr[1]);
    } else {
      return brr[0] * brr[1] * arr[0];
    }
  }
  if (arr.length >= 2) {
    return Math.max(
      brr[brr.length - 1] * brr[brr.length - 2] * brr[brr.length - 3],
      brr[brr.length - 1] * arr[0] * arr[1]
    );
  } else {
    return brr[brr.length - 1] * brr[brr.length - 2] * brr[brr.length - 3];
  }
};
