package com.weekone.objectmaster;

public class Human {
	protected int strength = 3;
	protected int stealth = 3;
	protected int intelligence = 3;
	protected int health = 100;
	//public int defaultAttibutes = 3;
	public Human() {
		
	}
	public void attack(Human h) {
		h.health -= this.strength;
	}
	public int getHealth() {
		return health;
	}
}
