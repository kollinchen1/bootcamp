class SLNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class SLStack {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    isEmpty(){
        return this.head == null;
    }
    push(value){
        var new_node = new SLNode(value);
        new_node.next = this.head;
        this.head = new_node;
        this.length++;
        }
        pop(){
        if (!this.head) {
        return null;
        }
        var removed = this.head.value;
        this.head = this.head.next;
        this.length--;
        return removed;
    }

    size(){
        return this.length;
    }

    peek(){

        return this.head? this.head.value: null;  
    }
        printPretty() {
        let runner = this.head;
        let printString = "~ SLStack ~ HEAD--(";
        while (runner && runner.next) {
        printString+= `${runner.value})->(`;
        runner = runner.next;
        }
        printString+=`${runner.value})->null\n`;
        console.log(printString);
    }
    reverse() {
        var tempStack = new SLStack();
        while(this.head) {
        tempStack.push(this.pop());
        }
        this.head = tempStack.head;
        this.length = tempStack.length;
    }
        /** Methods will be in the STACK class
   * Returns a new stack that is copy of the original stack.
   * Retain the original order. You may create extra temp 
   * SLStacks and/or SLQueues 
   * as storage.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {SLStack} Copy of the original stack
   */
    copy() {
        var tempStack = new SLStack();
        var runner = this.head;
        while(runner!=null){
            tempStack.push(runner.value)
            runner = runner.next
        }
        tempStack.reverse();
        return tempStack;
    }
    
    /**
     * Rearranges the stack so that numbers > 0 are 
     * on the top and any negatives are on the bottom
     * Retain the order of the positives and negatives
     * Use extra stacks and/or queues as storage.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The removed item.
     */
    partitionPositives() {
        var tempPos = new SLStack();
        var tempNeg = new SLStack();
        while(this.head){
            if(this.peek()< 0)
                tempNeg.push(this.pop())
            else
                tempPos.push(this.pop())

        }
        while(tempNeg.head){
            this.push(tempNeg.pop())
        }
        while(tempPos.head){
            this.push(tempPos.pop())
        }


    }
}
class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    enqueue(value){
        var new_node = new SLNode(value);
        
        if (this.isEmpty()) {
            this.head = new_node;
            this.tail = new_node;
        }
        else {
        this.tail.next = new_node;
        this.tail = new_node;
        }
        this.size++;
        return this;
    }
    dequeue(){
        if (this.isEmpty()) {
        return null;
        }
        var removed_val = this.head.value;
        this.head = this.head.next;
        
        if (!this.head) {
        this.tail = null;
        }
        this.size--;
        return removed_val;
    
    }
    isEmpty(){
        return !this.head;
    }
    getSize(){
        return this.size;
    }
    front(){
        return this.head? this.head.value: null;
    }
    
    printPretty() {
        let runner = this.head;
        let printString = "~ SLQueue ~ HEAD--(";
        while (runner && runner.next) {
        printString+= runner === this.tail? "TAIL ":"";
        printString+= `${runner.value})->(`;
        runner = runner.next;
        }
        printString+= runner === this.tail? "TAIL ":"";
        printString+=`${runner.value})->null\n`;
        console.log(printString);
    }
    // equals
    // Write a method on the Queue class that, given another queue, 
    // will return whether they are equal (same items in same order).
    // Do not use any extra array or objects as storage.
    // Do not alter (pop from or push into) either queue.
    equals(secondQ){
        if(this.getSize() != secondQ.getSize() ) return false;
        var runner1 =  this.head;
        var runner2 = secondQ.head;
        while(runner1!=null || runner2!=null){
            if(runner1.value!=runner2.value)
                return false;
            runner1 = runner1.next;
            runner2 = runner2.next;
        }
        return true;
    }

    // isPalindrome
    // Write a method on the Queue class that returns whether or not the queue is a palindrome
    // Use only 1 stack as additional storage (no additional arrays / objects).
    isPalindrome(){
        if(this.getSize() < 2)
            return false;
        var temp = new SLStack();
        var runner = this.head;
        while(runner!=null){
            temp.push(runner.value)
            runner=runner.next;
        }
        // temp.printPretty();
        // temp.reverse();
        // temp.printPretty();
        runner = this.head;
        while(runner!=null){
            // console.log(runner.value)
            // console.log(temp.pop())
            if(runner.value!=temp.pop())
                return false;
            runner = runner.next;
        }

        return true;
    }


}
/* 
 _____ _____ ____ _____ ___ _   _  ____ 
|_   _| ____/ ___|_   _|_ _| \ | |/ ___|
  | | |  _| \___ \ | |  | ||  \| | |  _ 
  | | | |___ ___) || |  | || |\  | |_| |
  |_| |_____|____/ |_| |___|_| \_|\____|
*/
// var q5 = new SLQueue()
// q5.enqueue(1)
// q5.enqueue(2)
// q5.enqueue(3)
// q5.printPretty();

// var q1 = new SLQueue()
// q1.enqueue(1)
// q1.enqueue(2)
// q1.enqueue(3)
// q1.printPretty();

// console.log(q1.equals(q5))

// var q2 = new SLQueue()
// q2.enqueue(3)
// q2.enqueue(2)
// q2.enqueue(1)
// q2.printPretty();
// console.log(q1.equals(q2)) // SHOULD RETURN FALSE

// var q3 = new SLQueue()
// q3.enqueue("a")
// q3.enqueue("b")
// q3.enqueue("c")
// q3.printPretty();
// console.log(q3.isPalindrome()) // SHOULD RETURN FALSE

// var q4 = new SLQueue()
// q4.enqueue("a")
// q4.enqueue("b")
// q4.enqueue("a")
// q4.printPretty();
// console.log(q4.isPalindrome()) // SHOULD RETURN FALSE


var s1 = new SLStack()
s1.push(1)
s1.push(-1)
s1.push(2)
s1.push(-2)
s1.push(3)
s1.push(-3)
s1.push(4)
s1.push(-5)
s1.push(5)
s1.push(-1)



var s2 = s1.copy();

s1.printPretty();
s2.printPretty();
s1.partitionPositives()
s1.printPretty();