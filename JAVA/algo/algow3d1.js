class BSTNode{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null
    }
    search(val){
        if(this.root == null){
            return false;
        }
        var runner = this.root;
        while(runner != null){
            if(runner.value == val){
                return true;
            }
            else if(val < runner.value){
                runner = runner.left
            }
            else
                runner = runner.right
        }
        return false;
    }

    insertIterative(val){
        var newNode = new BSTNode(val);
        if(this.root == null){
            this.root = newNode;
            return;
        }
        var runner = this.root;
        // var a = null;
        while(runner != null){
            // a = runner;
            if(val < runner.value){
                if(runner.left == null){
                    runner.left = newNode
                    return;
                }
                runner = runner.left
            }
            else{
                if(runner.right ==null){
                    runner.right = newNode;
                    return;
                }
                runner = runner.right
            }
                
        }
        // runner = newNode;
        // if(val < a.value){
        //     a.left = newNode;
        // }
        // else
        //     a.right = newNode;

    }
    insertRecursive(val,current = this.root){
        if(this.root === null){
            this.root = new BSTNode(val);
            return;
        }      
        // if(current === null){
        //     current = new BSTNode(val)
        //     // console.log(current.value)
        //     return;
        // }
        else if(val < current.value){
            if(current.left == null){
                current.left = new BSTNode(val);;
                return;
            }
            return this.insertRecursive(val,current.left)
        }
        if(current.right == null){
            current.right = new BSTNode(val);;
            return;
        }
        return this.insertRecursive(val,current.right)
        
    }
    // insertRecursive(val,current = this.root){
    //     //Base Case first
    //     let newNode = new BSTNode(val);
    //     if(this.root === null){
    //         this.root = newNode;
    //     }      
    //     // console.log()
    //       //Forward progress
    //     else if(val < current.value){
    //         if(current.left == null){
    //             current.left = newNode;
    //             return newNode;
    //         }
    //         else{
    //             return this.insertRecursive(val, current.left);
    //         }
    //     }
    //     else if(val > current.value){
    //         if(current.right == null){
    //             current.right = newNode;
    //             return newNode;
    //         }
    //         else{
    //             return this.insertRecursive(val, current.right);
    //         }
    //     }
    // }

    isEmpty(){
        return this.root==null;
    }
    inorderPrint(root = this.root){
        if (root == null)
            return;
        else {
            this.inorderPrint(root.left);
            console.log(root.value);
            this.inorderPrint(root.right);
        }
    }
    min(){
        if(this.isEmpty()){
            return null;
        }
        var runner = this.root;
        while(runner.left != null){
            runner = runner.left
                
        }
        console.log(runner.value);
        return runner.value;
    }

    minRecursive(current = this.root){
        if(current==null) return null;
        // console.log(current.value)
        if(current.left == null){
            return current.value
        }
        return this.minRecursive(current.left);
    }

    max(){
        if(this.root == null){
            return;
        }
        var runner = this.root;
        while(runner.right != null){
            runner = runner.right
                
        }
        console.log(runner.value);
        return runner.value;
    }
    maxRecursive(current = this.root){
        if(current==null) return null;
        if(current.right == null){
            return current.value
        }
        return this.maxRecursive(current.right);
    }
    sortedArrToBST(arr){
        this.root = this.sortedArrToBSTHelper(arr);
        // console.log(this.root);
    }
    sortedArrToBSTHelper(arr){
         // 1. BASE CASE
        if(arr.length < 1) return null
        // 2. FORWARD PROGRESS
        // CREATE A BST NODE WITH THE MIDDLE NUMBER OF THE CURRENT ARRAY
        let mid = Math.floor(arr.length/2);
        var node = new BSTNode(arr[mid]);
        // this.insertIterative(arr[mid]);

        // console.log(arr[mid]);
        // this.inorderPrint(this.root);
        node.left = this.sortedArrToBSTHelper(arr.slice(0,mid))
        
        node.right = this.sortedArrToBSTHelper(arr.slice(mid+1,arr.length))
        return node;
        // 3. RECURSIVE CALL
    }
    size(node = this.root){
        if(node == null){
            return 0;
        }
        let left = this.size(node.left);
        let right = this.size(node.right)
        return left+right+1;
    }

    height(node = this.root){
        if(node == null){
            return 0;
        }
        let left = this.height(node.left);
        let right = this.height(node.right)
        return Math.max(left,right)+1
    }
}
var a = new BST();
// a.insertIterative(5);
// a.insertIterative(6);
// a.insertIterative(10);
// a.insertIterative(3);
// a.insertIterative(1);
let arr = [1,2,3,4,5,6,7,8];
a.sortedArrToBST(arr)
// a.insertRecursive(100);
// a.insertRecursive(101);
// a.insertRecursive(102);
// a.insertRecursive(6);
// a.insertRecursive(10);
// a.insertRecursive(3);
// a.insertRecursive(1);
// a.min();
// console.log(a.minRecursive(a.root));
// a.max();
// console.log(a.maxRecursive(a.root));
a.inorderPrint()
console.log(a.size());
console.log(a.height());

