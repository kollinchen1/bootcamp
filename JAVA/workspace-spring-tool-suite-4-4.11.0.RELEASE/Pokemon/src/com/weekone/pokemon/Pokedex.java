package com.weekone.pokemon;
import java.util.*;  
public class Pokedex extends AbstractPokemon {
	protected ArrayList<Pokemon> myPokemons = new ArrayList<Pokemon>();
	public void listPokemon() {
		for(Pokemon p : myPokemons) {
			System.out.println(p.getName());
		}
	}
	
    // your code here
}

