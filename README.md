# 规范模板分支

## 目录结构约定
```js
|-- src
  |-- week01_array // 第几周_主题
    |-- 485.最大连续-1-的个数.js // 对应题目的js文件
  |-- week02_array
```

## 文件格式约定
具体`.js`文件的内容以注释为主要，包含但不限于以下几部分：
- 题目
- 解题思路
- 复杂度
- 运行结果（leetcode）
- 代码实现

注释生成建议可以使用`vscode`的[koro1FileHeader](https://github.com/OBKoro1/koro1FileHeader)注释插件，相关配置已放在`settings/vscde.json`下，安装插件并在**工作区启用**后复制其内容放在`vscode`的配置文件下即可，其中已关闭了大部分全局相关的功能。只需要修改作者名为本人即可：
```json
    // 头部注释
    "fileheader.customMade": {
        // 头部注释默认字段
        "Subject": "题目描述",
        "Thought": "思路分析",
        "Complexity": "复杂度",
        "Result": "运行结果",
        "Author": "作者" // 修改此项为自己姓名即可
    },
```

快捷键：`window：ctrl+alt+t,mac：ctrl+cmd+t,linux: ctrl+meta+t`。  
快捷键不可用很可能是被占用了,[可参考这里](https://github.com/OBKoro1/koro1FileHeader/issues/5)

已485题为例:
```js
/*
 * @Subject: 题目描述
    给定一个二进制数组， 计算其中最大连续1的个数。
    示例 1:
        输入: [1,1,0,1,1,1]
        输出: 3
        解释: 开头的两位和最后的三位都是连续1，所以最大连续1的个数是 3.
    注意：
        输入的数组只包含 0 和1。
        输入数组的长度是正整数，且不超过 10,000。
 * @Thought: 思路分析
    1. 将给定的数组按0拆分成，包含不定个数1的二维数组
    2. 比较二维数组中的每一项的长度，即1的个数，取最大的
 * @Complexity: 复杂度
    时间复杂度O(n) 需遍历split后的数组
    空间复杂度O(1) reduce内部遍历需要的内存
 * @Result: 运行结果
    41/41 cases passed (96 ms)
    Your runtime beats 45.14 % of javascript submissions
    Your memory usage beats 27.4 % of javascript submissions (42.2 MB)
 * @Author: qiukai
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
   // [1,1,0,0,1]
   if (nums.length === 0) return 0

   return nums.join('') // 11001
      .split('0') // ['11', '', '' , '1']
      .reduce((a, b) => Math.max(a, b.length), 0)
};
```