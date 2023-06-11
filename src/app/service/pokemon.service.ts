import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IPokemon } from "../model/pokemon.model";

@Injectable({
  providedIn: "root",
})
export class PokemonService {
  public pokemonData: IPokemon[] = [];

  public filteredPokemonData: IPokemon[] = [];
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    const apiUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100";
    return this.http.get(apiUrl)
  }
  

  async bringPokemonData(data: IPokemon[]) {
    const promises = data.map((pokemon: IPokemon) => {
      return new Promise<void>((resolve, reject) => {
        this.http
          .get(pokemon.url)
          .subscribe({
            next: (response: any) => {
              let pokemom_abilites: string[] = [];
              response.abilities.map((pokemon_abilites: any) => {
                pokemom_abilites.push(pokemon_abilites.ability.name);
              });
              const newObj: IPokemon = {
                name: response.name,
                url: response.sprites.front_default,
                abilities: pokemom_abilites,
              };
              this.pokemonData.push(newObj);
              resolve();
            },
            error: (error) => {
              reject(error);
            },
          });
      });
    });
  
    try {
      await Promise.all(promises);
      return this.pokemonData;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
  
