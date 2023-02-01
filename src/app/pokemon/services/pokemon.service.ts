import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonModel } from './../model/pokemon.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseUrl = `${environment.apiUrl}/Pokemon`;

  constructor(private http: HttpClient) {}
  public getPokemons() {
    return this.http.get<PokemonModel[]>(this.baseUrl);
  }
  public getPokemon(id: number) {
    return this.http.get<PokemonModel>(this.baseUrl + '/' + id);
  }

  savePokemon(pokemon: PokemonModel) {
    return this.http.post<PokemonModel[]>(this.baseUrl, pokemon);
  }
}
