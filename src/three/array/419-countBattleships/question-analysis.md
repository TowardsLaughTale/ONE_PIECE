### 419. 甲板上的战舰

<br>

### 题目

> 给定一个二维的甲板， 请计算其中有多少艘战舰。 战舰用 'X'表示，空位用 '.'表示。 你需要遵守以下规则：<br>
给你一个有效的甲板，仅由战舰或者空位组成。<br>
战舰只能水平或者垂直放置。<br>
换句话说,战舰只能由 1xN (1 行, N 列)组成，或者 Nx1 (N 行, 1 列)组成，其中N可以是任意大小。<br>
两艘战舰之间至少有一个水平或垂直的空位分隔 - 即没有相邻的战舰。


>进阶:<br>
你可以用一次扫描算法，只使用O(1)额外空间，并且不修改甲板的值来解决这个问题吗？

<br>

### 示例
```
示例 1:

X..X
...X
...X
在上面的甲板中有2艘战舰。

无效样例 :

...X
XXXX
...X
你不会收到这样的无效甲板 - 因为战舰之间至少会有一个空位将它们分开。

```

>来源：力扣（LeetCode）<br>
链接：https://leetcode-cn.com/problems/battleships-in-a-board<br>
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

<br>
