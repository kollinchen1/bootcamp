// //  TUESDAY -------------------------------------------------------------------//
//     /**
//      * Prints all the nodes in the list to the console.
//      * of this list.
//      * - Time: (?).
//      * - Space: (?).
//      * @returns {SinglyLinkedList} This list.
//      */
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
    // /**
    //  * Creates a new node with the given data and inserts it at the back of
    //  * this list.
    //  * - Time: (?).
    //  * - Space: (?).
    //  * @param {any} data The data to be added to the new node.
    //  * @returns {SinglyLinkedList} This list.
    //  */
    insertAtBack(data){
        if(this.head == null){
            head.value = new SLNode(data);
            return
        }
        var runner = this.head
        while(runner!=null){
            runner = runner.next
        }
        runner.next = new SLNode(data)
        // 1. SLL IS EMPTY
        // 2. SLL IS NOT EMPTY
    }
    
    // /**
    //  * Adds each item of the given array to the back of this list.
    //  * - Time: (?).
    //  * - Space: (?).
    //  * @param {Array<any>} vals The data for each new node.
    //  * @returns {SinglyLinkedList} This list.
    //  */
    seedFromArr(vals) {
        for(val of vals){
            insertAtBack(val)
        }
        return 0;
    }