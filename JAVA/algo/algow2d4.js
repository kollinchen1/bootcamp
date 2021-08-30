class CircleQueue {
    constructor(capacity) {
        this.size = 0
        this.head_index = -1
        this.tail_index = -1

        // Items is an array with length == capacity 
        // where all values are undefined
        this.items = new Array(capacity)

        this.capacity = capacity

    }

    // Adds a new element into the list.
    enqueue(val) {
        if(this.size == this.capacity){
            console.log("full")
            return;
        }

        if(this.head_index == -1){
            this.head_index = this.tail_index = 0;
            this.items[this.head_index] = val;
            this.size++;
        }
        
        else if(this.tail_index<=this.capacity){
            this.tail_index = (this.tail_index+1)%this.capacity;
            this.items[this.tail_index ] = val;
            this.size++;
            
        }
        
    }
    printHelper(){
        // console.log(this.items)
        let i = 0;
        while(i<this.capacity){
            console.log(this.items[i])
            i++
        }
    }
    dequeue() {
        // CIRCLE QUEUE IS EMPTY SO NOTHING TO DQUEUE
        if(this.size == 0){
            console.log("nothing to dequeeu, im empty");
            return;
        }
        let pop = this.items[this.head_index];
        this.items[this.head_index] = null;
        this.head_index = (this.head_index+1)%this.capacity;
        this.size--;
        if(this.head_index == this.tail_index && this.size == 0){
            this.head_index = this.tail_index = -1;
            this.size = 0;
        }
        
        return pop;

        
        // CRICLE QUEUE IS EMPTY AFTER DEQEUEE
        // CIRCLE QUEUE IS PARTIALLY AFTER DEQUEUE
    }

}
var c = new CircleQueue(4)
c.dequeue()
c.enqueue(1);
console.log(c.head_index,c.tail_index);
c.enqueue(2);
console.log(c.head_index,c.tail_index);
c.enqueue(3);
console.log(c.head_index,c.tail_index);
c.enqueue(4);
console.log(c.head_index,c.tail_index);
c.enqueue(5);



c.dequeue()
console.log(c.head_index,c.tail_index);
c.dequeue()
console.log(c.head_index,c.tail_index);
c.dequeue()
console.log(c.head_index,c.tail_index);
c.dequeue()
console.log(c.head_index,c.tail_index);
c.dequeue()
console.log(c.head_index,c.tail_index);
c.enqueue(1);
console.log(c.head_index,c.tail_index);
c.enqueue(2);
console.log(c.head_index,c.tail_index);
c.enqueue(3);
console.log(c.head_index,c.tail_index);
c.enqueue(3);
console.log(c.head_index,c.tail_index);
c.printHelper();

