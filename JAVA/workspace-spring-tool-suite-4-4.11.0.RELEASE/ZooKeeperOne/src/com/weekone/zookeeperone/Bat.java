package com.weekone.zookeeperone;

public class Bat extends Mammal{
	public Bat(int energyLevel) {
		super(300);
	}
	public void fly() {
		System.out.println("fewwww~");
		energyLevel-=50;
	}
	public void eatHumans() {
		System.out.println("so-well");
		energyLevel+=25;
	}
	public void attackTown() {
		System.out.println("boooooom");
		energyLevel -=100;
	}
}
