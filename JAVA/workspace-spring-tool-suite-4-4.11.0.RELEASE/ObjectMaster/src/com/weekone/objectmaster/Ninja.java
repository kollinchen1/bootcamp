package com.weekone.objectmaster;

public class Ninja extends Human {
	public Ninja() {
		this.stealth = 10;
	}
	
	public void steal(Human h) {
		h.health-=stealth;
		this.health+=stealth;
	}
	public void runAway(){
		this.health -= 10;
	}
}

