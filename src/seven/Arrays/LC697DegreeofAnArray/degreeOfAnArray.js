/**
 * 
给定一个非空且只包含非负数的整数数组 nums, 数组的度的定义是指数组里任一元素出现频数的最大值。

你的任务是找到与 nums 拥有相同大小的度的最短连续子数组，返回其长度。

示例 1:

输入: [1, 2, 2, 3, 1]
输出: 2
解释: 
输入数组的度是2，因为元素1和2的出现频数最大，均为2.
连续子数组里面拥有相同度的有如下所示:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
最短连续子数组[2, 2]的长度为2，所以返回2.
示例 2:

输入: [1,2,2,3,1,4,2]
输出: 6
注意:

nums.length 在1到50,000区间范围内。
nums[i] 是一个在0到49,999范围内的整数。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/degree-of-an-array
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

//思路：创建一个map<num, position[]> 数组的元素和其出现的对应元素，记住degree最大的那个,然后遍历map
//取degree最大中的距离最小的

/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    //nums > 0 not null
    //use map to keep track of <value, position[]> pairs, 
    //the min length of subarray is last index - first index + 1 of the value with the max degree 
        const map = new Map();
        let max_degree = Number.MIN_SAFE_INTEGER;
        let res = Number.MAX_SAFE_INTEGER;
        nums.forEach((num, i) => {
            let pos = map.get(num) ? map.get(num) : [];
            pos.push(i);
            map.set(num, pos);
            max_degree = Math.max(max_degree, pos.length);
        });
      
        for(let [key, value] of map.entries()){
            if(value.length === max_degree){
                res = Math.min(nums.lastIndexOf(key) - nums.indexOf(key) + 1,res);
            }
        }
        return res;
    };