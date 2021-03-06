package com.weekone.dll;

public class DLL {
	public Node head;
	public Node tail;
	private int size = 0;
	public DLL() {
        this.head = null;
        this.tail = null;
    }   
	public void push(Node newNode) {
        // if there is no head in the list, aka, an empty list, we set the newNode to be the head and tail of the list
        if(this.head == null) {
            this.head = newNode;
            this.tail = newNode;
            size++;
            return;
        }
        // first find the lastNode in the list
        // then, set the lastNode's next to be the newNode;
        // then, we have to set the previous of the lastNode to the lastNode that we found previously.
        // finally, set the list's tail to be the node that we have added
        Node lastNode = this.tail;
        lastNode.next = newNode;
        newNode.prev = lastNode;
        this.tail = newNode;
        size++;
    }
	public void printValuesForward() {
		System.out.println();
        // find the first node, aka head.
        Node current = this.head;
        
        // while the current node exists...
        while(current != null) {
            // print it's value
            System.out.print(current.value+" ");
            // and move on to it's next node.
            current = current.next;
        }
    }	   
	public void printValuesBackward() {
		System.out.println();
		Node current = this.tail;
        // while the current node exists...
        while(current != null) {
            // print it's value
            System.out.print(current.value+" ");
            // and move on to it's next node.
            current = current.prev;
        }
	}
	public Node pop() {
		if(size == 0) {
			System.out.println("No element");
			return null;
		}
		else if(size == 1) {
			Node temp = this.head;
			this.head = null;
			this.tail = null;
			size--;
			return temp;
		}
		Node temp = this.tail;
		this.tail.prev.next = null;
		this.tail = tail.prev;	
		size--;
		return temp;
		
	}
	public boolean contains(Integer value) {
		Node current = this.head;
        // while the current node exists...
        while(current != null) {
        	if(current.value == value)
        		return true;
            // and move on to it's next node.
            current = current.next;
        }
		return false;
	}
	public int size() {
		return size;
	}
	public void insertAt(Node newNode, int index) {
		if(head == null) {  
            //Both head and tail will point to newNode  
            head = tail = newNode;  
            //head's previous will point to null  
            head.prev = null;  
            //tail's next will point to null, as it is the last node of the list  
            tail.next = null;  
            return;
        }  
		if(size<index) {
			System.out.print("going outta bound");
			return;
		}
		int count = 0;
		Node current = this.head;
		while(count<index) {
			current = current.next;
			count++;
		}
		current.prev.next = newNode;
		newNode.next = current;
		newNode.prev = current.prev;
		current.prev = newNode;
		
		size++;
		
	}
	public void removeAt(int index) {

		if(size == 0 || head == null) {
			System.out.println("Empty");
			return;
		}
		int count = 0;
		Node current = this.head;
		
		while(count<index) {
			current = current.next;
			count++;
		}
		if(current!=this.head) {
			System.out.println("adasd "+current.value);
			Node temp = current.prev;
			temp.next = current.next;
			current.next.prev = temp;
			current.next = null;
			current.prev = null;
		}
		else {
			head = current.next;
			current.next.prev = null;
			
		}
		
		
		size--;
	}
	public boolean isPalindrome() {
		if(size == 1) {
			return false;
		}
		Node headpt = this.head;
		Node tailpt = this.tail;
		while(headpt!=tailpt) {
			if(headpt.value != tailpt.value) {
				return false;
			}
			headpt = headpt.next;
			tailpt = tailpt.prev;
		}
		return true;
	}
}
