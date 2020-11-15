/**
 * swap...
 * @param {number[]} arr 
 * @param {number} i1 
 * @param {number} i2 
 */
function swap(arr, i1, i2) {
    let temp = arr[i1];
    arr[i1] = arr[i2];
    arr[i2] = temp;
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
class KthLargest {
    constructor(items, k){
        this.items = items
        this.k = k
        this.items.forEach((val, i) => {
            this.add(val)
        })
    }
    add(val){
        if(this.items.length < k){
            this.items.push(val)
            this.heapUp(this.items.length - 1)
        }else{
            if(val > this.items[1]){
                this.items[1] = val
                this.heapDown(1)
            }
        }
        return this.items[1]
    }
    heapUp(idx){//build heap by inserting
        let pIdx = Math.floor(idx / 2)
        while(pIdx > 0 && this.items[idx] < this.items[pIdx]){
            swap(this.items,idx,pIdx)
            pIdx = Math.floor(idx / 2)
        }
    }
    heapDown(idx){//heapify
        let curr = idx
        while(true){
            let left = idx * 2 + 1
            let right = idx * 2 + 2
            //compare left child
            if(left < this.items.length && this.items[left] < this.items[idx]){
                curr = left
            }
            //compare right child later than left to keep heap orderd
            if(right < this.items.length && this.items[right] < this.items[idx]){
                curr = right
            }
            if(curr !== idx){
                swap(this.items, curr, idx)
                idx = curr
            }else{
                break;
            }
        }
    }
}
       3
   5        3
7      8      

2*(i + 1) + 1 = j
(j - 1) / 2 - 1 = i