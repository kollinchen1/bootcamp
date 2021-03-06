package com.weekone.tries;
public class Trie {
    public Node root;
    
    public Trie() {
        this.root = new Node();
    }
    
    public void insertWord(String word) {
        // gets the root node;
        Node currentNode = this.root;
        
        // iterates over every character in the word
        for(int i = 0; i < word.length(); i++) {
            // currentLetter is just the character / letter at the iteration
            Character currentLetter = word.charAt(i);
            // ask if the current letter is in the map of the current node
            Node child = currentNode.children.get(currentLetter);
            if(child == null) {
                child = new Node();
                currentNode.children.put(currentLetter, child); 
            } 
            
            currentNode = child;
        }
        currentNode.isCompleteWord = true;
    }
    public boolean isPrefixValid(String prefix) {
    	Node currentNode = this.root;
    	for(int i = 0; i < prefix.length(); i++) {
    		Character currentLetter = prefix.charAt(i);
    		Node child = currentNode.children.get(currentLetter);
    		if(child == null) {
    			return false;
    		}
    		currentNode = child;
    	}
		return true;
    }
    public boolean isWordValid(String word) {
    	Node currentNode = this.root;
    	for(int i = 0; i < word.length(); i++) {
    		Character currentLetter = word.charAt(i);
    		Node child = currentNode.children.get(currentLetter);
    		if(child == null) {
    			return false;
    		}
    		currentNode = child;
    	}
		return currentNode.isCompleteWord;
    }
    public void printAllKeys() {
    	Node currentNode = this.root;
    	printHelper(currentNode);
    	

    }
    private void printHelper(Node current) {
    	Node currentNode = current;
    	for (char key : currentNode.children.keySet()) {
			System.out.print(key+" ");
		}
    	for(int i = 0; i<26; i++) {
    		char letter = (char)('a'+i);
			Node child = currentNode.children.get(letter);
			if(child != null) {
//				currentNode = child;
				printHelper(child);
			}
			
			
		}
    }



}
