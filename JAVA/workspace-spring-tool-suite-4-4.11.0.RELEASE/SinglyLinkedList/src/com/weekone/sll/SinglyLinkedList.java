package com.weekone.sll;

public class SinglyLinkedList {
    public Node head;
    public SinglyLinkedList() {
    	this.head = null;
        // your code here
    }
    // SLL methods go here. As a starter, we will show you how to add a node to the list.
    public void add(int value) {
        Node newNode = new Node(value);
        if(head == null) {
            head = newNode;
        } else {
            Node runner = head;
            while(runner.next != null) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
    }  
    public void remove() {
    	if(this.head == null){
    		System.out.println("LIST EMPTY");
            return;
        }
        // IF THE LIST IS NOT EMPTY
        Node runner = this.head;
        while(runner.next.next != null){
//        	System.out.println(runner.value);
            runner = runner.next;
        }
        
        runner.next = null;
    }
    public void printValues() {
    	if(this.head == null){
    		System.out.println("LIST EMPTY");
            return;
        }
        // IF THE LIST IS NOT EMPTY
        Node runner = this.head;
        while(runner != null){
            System.out.print(runner.value +" ");
            runner = runner.next;
        }
    }
    public Node find(int value) {
    	if(this.head == null){
    		System.out.println("LIST EMPTY");
            return null;
        }
        // IF THE LIST IS NOT EMPTY
        Node runner = this.head;
        while(runner != null){ 
        	if(runner.value == value )
        		return runner;
            runner = runner.next;
        }
		return null;
    	
    }
    public void removeAt(int index) {
    	if(this.head == null){
    		System.out.println("LIST EMPTY");
            return;
        }
    	if(index == 0) {
    		Node temp = this.head;
    		this.head = this.head.next;
    		temp.next = null;
    		return;
    	}
    	int count = 0;
        // IF THE LIST IS NOT EMPTY
        Node runner = this.head;
        while(runner != null &&  count < index-1){ 
            runner = runner.next;
            count++;
        }
//        System.out.println(count + " "+ runner.value); 
        if(count+1 <index || runner == null||runner.next==null) {
        	System.out.println("Out of Bound");
        	return;
        }
        if(runner.next.next !=null) {
        	Node temp = runner.next.next;
        	System.out.println("adad"+ temp.value);
        	runner.next = temp;
        }
        else if(runner.next !=null) {
        	runner.next = null;
        }
        
        
//        System.out.println("adad"+ runner.value);
//        runner.next = null;
        
    }
}
