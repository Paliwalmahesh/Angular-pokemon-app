import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pokemonCreate, PokemonModel } from './../model/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl = 'http://localhost:8080/pokemon';

  constructor(private http: HttpClient) {}
  public getPokemons() {
    // console.log('pkem' +this.http.get<any>(this.baseUrl));
    return this.http.get<PokemonModel[]>(this.baseUrl);
  }
  public getPokemon(id: number) {
    return this.http.get<PokemonModel>(this.baseUrl + '/' + id);
  }

  savePokemon(pokemon: pokemonCreate) {
    return this.http.post<pokemonCreate[]>(this.baseUrl, pokemon);
  }
}
