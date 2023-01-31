import { Component, OnInit } from '@angular/core';
import { PokemonModel } from '../model/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-list-component',
  templateUrl: './pokemon-list-component.component.html',
  styleUrls: ['./pokemon-list-component.component.css'],
})
export class PokemonListComponentComponent implements OnInit {
  pokemons: PokemonModel[] = [];
  setAlert: boolean = false;
  setError: boolean = false;
  errorMsg: string = '';
  constructor(private pokemonServices: PokemonService) {}
  ngOnInit() {
    this.pokemonServices.getPokemons().subscribe({
      next: (response) => {
        this.pokemons = response;
      },
      error: (error) => {
        this.setError = true;
        this.errorMsg = error.message;
      },
    });
  }
  setErrorFalse() {
    this.setError = false;
  }
}
