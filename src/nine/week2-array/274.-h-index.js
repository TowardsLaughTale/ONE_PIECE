/**
 * @Subject 274. H-Index

  给定一位研究者论文被引用次数的数组（被引用次数是非负整数）。编写一个方法，计算出研究者的 h 指数。
  h 指数的定义：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （N 篇论文中）
  总共有 h 篇论文分别被引用了至少 h 次。（其余的 N - h 篇论文每篇被引用次数 不超过 h 次。）

  例如：某人的 h 指数是 20，这表示他已发表的论文中，每篇被引用了至少 20 次的论文总共有 20 篇。

  示例：

  输入：citations = [3,0,6,1,5]
  输出：3 
  解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
      由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。

  提示：如果 h 有多种可能的值，h 指数是其中最大的那个。

 * @Thought 思路分析
  把数组从大到小排序，把数组假想成坐标系，值为y,下标为x，找到y >= h, x = h,该点左侧的值全部满足要求；

 * @Result 运行结果
  执行用时：76 ms, 在所有 JavaScript 提交中击败了82.03%的用户
  内存消耗：37.7 MB, 在所有 JavaScript 提交中击败了68.25%的用户

 * @Complexity 复杂度分析
  时间复杂度：O(nlogn);
  空间复杂度：O(1);

 * @author 王绍余
 * 
 */

 /**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  let count = 0;
  citations.sort((a, b) => b - a);
  for(let i = 0; i < citations.length; i++) {
      if(citations[i] > i) {
          count++;
      }
  }
  return count;
};