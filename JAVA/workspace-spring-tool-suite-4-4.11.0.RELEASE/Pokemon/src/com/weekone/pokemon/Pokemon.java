package com.weekone.pokemon;

public class Pokemon {
	protected String name;
	protected int health;
	protected String type;
	public static int count = 0;	
	public Pokemon(String name, int health, String type) {
		this.health = health;
		this.name = name;
		this.type = type;
		count++;
	}
	public void attackPokemon(Pokemon pokemon) {
		pokemon.health -= 10;
	}
	public String getName() {
		return name;
	}
	public String getType() {
		return type;
	}
	public int getHealth() {
		return health;
	}
	public void setHealth(int health) {
		this.health = health;
	}
	public void setName(String name) {
		
		this.name = name;
	}
	public void setType(String type) {
		this.type = type;
	}
}
