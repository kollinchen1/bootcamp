package com.weekone.zookeeperone;

public class Gorilla extends Mammal {
	public Gorilla(int energyLevel) {
		super(energyLevel);
	}
	public void eatBananas() {
		System.out.println("Eatting a Banana");
		energyLevel += 10;
	}
	public void throwSomething() {
		System.out.println("I threw my banana");
		energyLevel -= 5;
	}
	public void climb() {
		System.out.println("Start Climbing");
		energyLevel -= 10;
	}
}
