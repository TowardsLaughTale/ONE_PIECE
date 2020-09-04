/**
 * 
274. H 指数

给定一位研究者论文被引用次数的数组（被引用次数是非负整数）。编写一个方法，计算出研究者的 h 指数。

h 指数的定义：h 代表“高引用次数”（high citations），一名科研人员的 h 指数是指他（她）的 （N 篇论文中）总共有 h 篇论文分别被引用了至少 h 次。（其余的 N - h 篇论文每篇被引用次数 不超过 h 次。）

例如：某人的 h 指数是 20，这表示他已发表的论文中，每篇被引用了至少 20 次的论文总共有 20 篇。

示例：

输入：citations = [3,0,6,1,5]
输出：3 
解释：给定数组表示研究者总共有 5 篇论文，每篇论文相应的被引用了 3, 0, 6, 1, 5 次。
     由于研究者有 3 篇论文每篇 至少 被引用了 3 次，其余两篇论文每篇被引用 不多于 3 次，所以她的 h 指数是 3。
 
提示：如果 h 有多种可能的值，h 指数是其中最大的那个。
 */
/**
 * @param {number[]} citations
 * @return {number}
 */
//citations > 0, may have dup, h may not be in array?
//Actually finding a pivot after which are greater, before which are smaller
    //citations（引用 :[7,6,5,3,2,1,0] 
    //index（文章数量）:[0,1,2,3,4,5,6],h是这里面的，求的是在哪个点满足这个条件，
    //所以h是index而不是数组中的某个数,当index是几的时候满足“题中条件” -> 所以首先排序，
    //找到这样一个index，使得大于citation[index]要大于index，
    //虽然题中说至少是h，但文章数量=index+1,所以citation[index]要大于index而没有等于
    //Time Complexity: O(nlgn), Space Complexity: O(1)
    var hIndex = function(citations) {
        if(!citations || citations.length === 0) return 0;

        citations.sort((a,b) => b - a);//降序排
        
        let h = -1;
        for( let i = 0; i < citations.length ; i ++ ) {
            if(citations[i] <= i) {
                h = i;
                break;
            }
        }

        if(h === -1) return citations.length;//最后如果执行这步说明所有的文章都至少引用了h次故返回长度
        return h;
    };