package com.weekone.dll;

public class Node {
    public Integer value;
    public Node prev;
    public Node next;
    
    public Node(Integer val) {
        this.value = val;
        this.prev = null;
        this.next = null;
    }
}