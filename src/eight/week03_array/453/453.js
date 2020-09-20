/*
 * @Subject: 题目描述
    453. 最小移动次数使数组元素相等
    给定一个长度为 n 的非空整数数组，找到让数组所有元素相等的最小移动次数。每次移动将会使 n - 1 个元素增加 1。
    示例:
        输入:
            [1,2,3]
        输出:
            3
        解释:
            只需要3次移动（注意每次移动会增加两个元素的值）：
            [1,2,3]  =>  [2,3,3]  =>  [3,4,3]  =>  [4,4,4]
 * @Thought: 思路分析
    1. 首先排序，然后整理出相等的各个数的个数
    2. 然后每在n个相等数的基础上提高i个本来相等的数，需要经过n*i次
    3. 从大到小，将当前相等的最大的数的个数和与最近的最小数的差距相乘
    4. 累积求和
 * @Complexity: 复杂度
    时间复杂度：O(nlog(n)) 主要是排序
    空间复杂度：O(n) map存储值
 * @Result: 运行结果
    84 / 84 个通过测试用例
    状态：通过
    执行用时: 796 ms
    内存消耗: 55.9 MB

 * @Author: 作者
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  let len = nums.length;
  nums = nums.sort((a, b) => b - a);
  let map = new Map();
  for (let i = 0; i < len; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], map.get(nums[i]) + 1);
    }
  }
  let accu = 0;
  let entrys = map.entries();
  let node = entrys.next();
  let now = node.value;
  while ((node = entrys.next())) {
    console.log(now);
    if (!node.done) {
      accu += (now[0] - node.value[0]) * now[1];
      now[0] = node.value[0];
      now[1] += node.value[1];
    } else {
      break;
    }
  }
  console.log(accu);
  return accu;
};

let arr = [5, 6, 8, 8, 5];
minMoves(arr);
