import { DecimalPipe, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PokemonModel } from '../model/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import '@angular/localize/init';

@Component({
  selector: 'app-pokemon-list-component',
  templateUrl: './pokemon-list-component.component.html',
  styleUrls: ['./pokemon-list-component.component.css'],
  // standalone: true,
})
export class PokemonListComponentComponent implements OnInit {
  pokemons: PokemonModel[] = [];
  currpokemons: PokemonModel[] = [];
  setAlert: boolean = false;
  setError: boolean = false;
  errorMsg: string = '';
  collectionSize = 0;
  page = 1;
  pageSize = 3;

  constructor(private pokemonServices: PokemonService) {
    this.refreshPokemon();
  }
  ngOnInit() {
    this.pokemonServices.getPokemons().subscribe({
      next: (response) => {
        this.pokemons = response;
        this.collectionSize = this.pokemons.length;
        this.refreshPokemon();
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

  refreshPokemon() {
    this.currpokemons = this.pokemons
      .map((pokemon, i) => ({
        id: i + 1,
        ...pokemon,
      }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }
}
