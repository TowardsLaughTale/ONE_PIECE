/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  if (nums.length < 3) {
    return Math.max(...nums);
  }
  let set = new Set();
  for (let num of nums) {
    set.add(num);
  }
  let count = 3;
  let a = 0;
  let m = 0;
  while (set.size > 0) {
    a = Math.max(...set);
    if (count == 3) m = a;
    set.delete(a);
    count--;
    if (count === 0) {
      break;
    }
  }
  if (count === 0) {
    return a;
  } else {
    return m;
  }
};
