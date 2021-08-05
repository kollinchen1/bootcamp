package com.weekone.pokemon;

public class PokemonTest {

	public static void main(String[] args) {
		Pokemon p1 = new Pokemon("duck",10000,"normal");
		Pokemon p2 = new Pokemon("bul",100,"water");
		Pokedex pokedex = new Pokedex();
		Pokemon p3 = pokedex.createPokemon("char",100,"fire");
		p1.attackPokemon(p3);
		System.out.println(p1.getHealth());
		System.out.println(p2.getHealth());
		System.out.println(p3.getHealth());
		System.out.println(Pokemon.count);
		System.out.println(pokedex.pokemonInfo(p3));
		pokedex.myPokemons.add(p1);
		pokedex.myPokemons.add(p2);
		pokedex.myPokemons.add(p3);
		pokedex.listPokemon();
	}

}
