/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const longestOnes = (A, K) => {
    // 1. 设置最高次数
    let maxTime = 0;
  
    // 2. 遍历字符串
    for (let i = 0; i < A.length; i++) {
      // 只有当前元素为 1 的时候，才进行统计
      if (A[i] === 1) {
        // 2.1 设置参数
        let replaceTime = K, // 可滑动次数
          slide = i, // 滑动的下标
          time = 1; // 本次出现数
  
        // 2.2 向右开始滑动
        while (
          (replaceTime || A[slide + 1] === 1) // 还有滑动次数或者下一个数字也是 1
          && slide < A.length - 1 // 限制滑动边界 [i, A.length - 1]
        ) {
          // 每滑动一次向右移一位
          slide++;
          // 每滑动一次本次出现数 + 1
          time++;
          // 如果本次是不相同的，减少滑动次数
          if (A[slide] !== 1) {
            replaceTime--;
          }
        }
        // 2.3 如果向右到顶，但是还有 replaceTime，
        // 表明向左还可以滑，那就继续向左滑动
        // 滑动前重置一下开始位置
        slide = i;
  
        // 2.4 向左开始滑动
        while (
          (replaceTime || A[slide - 1] === 1) // 类似向右的判断
          && slide > 0 // 边界为 [0, i]
        ) {
          // 每滑动一次向左移一位
          slide--;
          // 每滑动一次本次出现数 + 1
          time++;
          // 如果本次是不相同的，减少滑动次数
          if (A[slide] !== 1) {
            replaceTime--;w
          }
        }
  
        // 2.5 将本次滑动次数汇总到最高次数中
        maxTime = Math.max(maxTime, time);
      }
    }
  
    // 3. 返回结果
    return maxTime;
  };
  
  console.log(longestOnes(
    [1,1,1,0,0,0,1,1,1,1,0],
    2
  )); // 6
  
  