/*
 * @Subject: 题目描述
    给你一个长度为 n 的整数数组 nums，其中 n > 1，返回输出数组 output ，其中 output[i] 等于 nums 中除 nums[i] 之外其余各元素的乘积。

 * @Thought: 思路分析
    第一次遍历数组得到左乘积列表 
    第二次遍历使用当前位置的左乘积列表 * 当前位置的右乘积
    得到最后的左乘积列表即是需要的数组
 * @Complexity: 复杂度
    时间复杂度： O(n)
    空间复杂度： O(1)(题目提示返回的数组不算入空间复杂度，所以此处只有一个 '当前位置的右乘积'，即 O(1))

 * @Result: 运行结果
    执行用时：116 ms, 在所有 JavaScript 提交中击败了80.36%的用户
    内存消耗：48.3 MB, 在所有 JavaScript 提交中击败了52.51%的用户
 */  
    
/**
 * @param {number[]} nums
 * @return {number[]}
 */
let productExceptSelf = function(nums) {
        // 左侧乘积
        let L = [1],
        // 右侧乘积
        R = 1, 
        len = nums.length;
        for (let i = 1; i < len; i++) {
            L[i] = L[i - 1] * nums[i - 1]
            // L[0] = 1
            // L[1] = 1 * 1 (L[0] * nums[0])
            // L[2] = 1 * 2 (L[1] * nums[1])
            // L[3] = 1 * 2 * 3 (L[2] * nums[2])
        }
    
        for (let i = len - 1; i >= 0; i--) {
            L[i] = L[i] * R
            R *= nums[i]
            // L[3] = 1
            // L[2] = 4 * 1 (nums[3] * L[3])
            // L[1] = 4 * 3 (nums[2] * L[2])
            // L[0] = 4 * 3 * 2 (nums[1] * L[1])
        }
        
        return L
    }