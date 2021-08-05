class SLNode{
    constructor(a){
        this.val = a;
        this.next = null;
    }
}
class SLL{
    constructor(){
        this.head = null;
    }
}
let head = new SLNode(1);
let runner_temp = head;
for (let i of [7,3,5,2]) {
    let new_node = new SLNode(i);
    runner_temp.next = new_node;
    runner_temp = new_node;
}

printValues(){
    if(this.head == null){
        console.log("LIST EMPTY")
        return
    }
    // IF THE LIST IS NOT EMPTY
    var runner = this.head
    while(runner != null){
        console.log(runner.value)
        runner = runner.next
    }
}
// console.log(head.val);
// console.log(head.next.val);
// console.log(head.next.next.next.val);

