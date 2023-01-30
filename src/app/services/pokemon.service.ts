import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonModel } from './../model/pokemon.model';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl = 'http://localhost:3000/Pokemon';

  constructor(private http: HttpClient) {}
  public getPokemons() {
    return this.http.get<PokemonModel[]>(this.baseUrl);
  }

  savePokemon(pokemon:PokemonModel){
    return this.http.post<PokemonModel[]>(this.baseUrl,pokemon);
  }
}
