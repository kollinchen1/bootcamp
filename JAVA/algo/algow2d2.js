class SLNode {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class SLQueue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enqueue(value){
        var newNode = new SLNode(value)
        if(this.tail == null||this.head == null){
            this.head = this.tail = newNode;
            size++;
            return;
        }
        this.tail.next = newNode;
        this.tail = newNode;
        size++;
    }
    dequeue(){
        if(this.head == null){
            return null;
        }
        if(this.head == this.tail){
            this.tail = null;
        }
        var temp = this.head;
        this.head = this.head.next;
        return temp.value;

    }
    isEmpty(){
        return this.head == null;
    }
    getSize(){
        return size;
    }
    front(){
        if(this.head==null){
            return null;
        }
        return this.head.value;
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
}

