package com.weekone.objectmaster;

public class Wizard extends Human{
	private int health = 50;
	private int intelligence = 8;
	public Wizard() {
		this.health = 50;
		this.intelligence = 8;
	}
	public void heal(Human h) {
		h.health+=this.intelligence;
	}
	public void fireball(Human h) {
		h.health-=(this.intelligence)*3;
	}

}
