// MON
// LAST IN FIRST OUT
// LIFO - STACKS
class Stack {
    constructor(items = []) {
        this.items = items;
    }
    // Time: O(1)
    // Space: O(1)
    push(item) {
        this.items.push(item)
    }

    // Time: O(1)
    // Space: O(1)
    // Returns undefined if empty
    pop() {
        if(!this.isEmpty())
            return this.items.pop();
        return null
    }

    // aka top, returns undefined if empty
    // Time: O(1)
    // Space: O(1)
    peek() {
        return items[size()-1];
    }

    // Time: O(1)
    // Space: O(1)
    isEmpty() {
        return (this.items.length == 0)
    }

    // Time: O(1)
    // Space: O(1)
    size() {
        return this.items.length;
    }

    // Time: O(n) linear
    // Space: O(n)
    print() {
        for(var item in this.items){
            console.log(item);
        }
    }
}

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

    isEmpty() {
        return this.length == 0
    }

    // Adds a new node with the given value in front of the head node.
    push(value) {
        var newNode = new SLNode(value);
        if(this.head == null){

        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    // Removes the head node
    // return the popped value -- important!
    pop() {
        if(this.head == null){
            return null
        }
        var temp = this.head.value;
        this.head = this.head.next;
        this.length--;
        return temp;
    }

    size() {
        return this.length
    }

    peek() {
        if(!this.isEmpty()){
            return this.head.value;
        }
    }
    printPretty() {
        if(this.head == null){
            console.log("LIST EMPTY")
            return
        }
        // IF THE LIST IS NOT EMPTY
        var runner = this.head
        let newString = "";
        while(runner != null){
            newString += runner.value + " ";
            runner = runner.next
        }
        console.log(newString);
    }

    ////  EXTRA  /////
    // Reverses stack with the order of the nodes reversed
    // For this exercise, do NOT try to re-point all the pointers
    // use an extra stack as storage and utilize the pop and push
    // methods. Hint: you can re-point the head.
    reverse() {

    }
}

var ST = new Stack();
ST.push(1)
ST.push(1)
ST.pop()
ST.push(3)
ST.push(2)
ST.print();