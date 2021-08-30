/** NEW CLASS!! MIN HEAP *****
 * 
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2)
 * - left child is located at: 2i
 * - right child is located at: 2i + 1
 */
class MinHeap{
    constructor(){
        this.heap = [null];
    }
    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    getMin(){
        return this.heap.length >= 1?this.heap[1]:null;
    }

    /**
     * Inserts a new number into the heap and maintains the heaps order.
     * 1. Push new num to back then.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * - Time: O(log n) logarithmic due to shiftUp / iterative swapping.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */
    insert(num){
        this.heap.push(num);
        let current = this.heap.length -1
        let parent = Math.floor(current/2)
        let temp = 0;
        while(true){
            if(this.heap[current] < this.heap[parent]){
                // console.log(this.heap[current],this.heap[parent])
                temp = this.heap[current];
                this.heap[current] = this.heap[parent]
                this.heap[parent] = temp;
                // swap(this.heap[current],this.heap[parent])
                current = parent;
                if(current === 1){
                    break;
                }
                parent = Math.floor(current/2)
            }
            else
            {
                // console.log(this.heap[current],this.heap[parent])
                break;
                
            } 
        }
        
    }
    print(){
        for(let i = 1; i<this.heap.length;i++){
            console.log(this.heap[i])
        }
    }
    extract() {
        // TO SAVE THE MIN NUMBER THAT WE WANT TO RETURN
        // SWAP THE FIRST AND LAST NUMBER IN ARR
        // POP THE LAST NUMBER
        // THE INDEX OF THE VALUE THAT WE ARE SWAPPING
        var index = 1;
        var leftIdx = index * 2
        var rightIdx = leftIdx + 1
        let temp = this.heap[index];
        this.heap[index] = this.heap[this.heap.length-1];
        this.heap[this.heap.length-1] = temp;
        let minPop = this.heap.pop();
        while( leftIdx < this.heap.length){
            let right = this.heap[rightIdx];
            let left = this.heap[leftIdx];
            let parent = this.heap[index];

            if(left < parent || right < parent){
                if(left < right){
                    [this.heap[index], this.heap[leftIdx]] = [this.heap[index],this.heap[leftIdx]];
                    index = leftIdx;
                }
                else{
                    [this.heap[index], this.heap[rightIdx]] = [this.heap[index],this.heap[rightIdx]];
                    index = rightIdx;
                }
            }
            else
                break;
                
            leftIdx = index*2;
            rightIdx = leftIdx + 1;
          // IS A SWAP NECESSARY
          // WHICH CHILD VALUE DO WE SWAP WITH
          // LOGIC FOR THE ACTUAL SWAP IF NECESSARY
          // RESETING THE INDEXES FOR THE NEXT STEP OF SWAPS
        }
        return minPop;
        // RETURN THE MIN NUMBER
    }
}

var h = new MinHeap();

// h.insert(2);
// h.insert(6);
// h.insert(4);
// h.insert(3);
// h.insert(5);
// h.insert(10);
// // console.log("61",h.getMin());
// h.insert(8);
// h.insert(1);

h.insert(2);
h.insert(7);
h.insert(9);
h.insert(3);
h.insert(1);
h.insert(5);
// console.log("64",h.getMin());
h.print();
