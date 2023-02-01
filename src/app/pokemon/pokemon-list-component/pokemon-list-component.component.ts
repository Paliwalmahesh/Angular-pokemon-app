import { Component, OnInit } from '@angular/core';
import { PokemonModel } from '../model/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import '@angular/localize/init';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-pokemon-list-component',
  templateUrl: './pokemon-list-component.component.html',
  styleUrls: ['./pokemon-list-component.component.css'],
  // standalone: true,
})
export class PokemonListComponentComponent implements OnInit {
  // @Input() searchedTerm = undefined;
  pokemons: PokemonModel[] = [];
  currpokemons: PokemonModel[] = [];
  searchedPokemons: PokemonModel[] = [];
  setAlert: boolean = false;
  setError: boolean = false;
  errorMsg: string = '';
  collectionSize = 0;
  page = 1;
  pageSize = 3;
  searchTerm?: string = undefined;

  constructor(
    private pokemonServices: PokemonService,
    private route: ActivatedRoute
  ) {
    this.refreshPokemon();
    this.route.queryParams.subscribe((params: Params) => {
      this.searchTerm = params['searchTerm'];
      this.filterPokemon();
    });
  }

  ngOnInit() {
    // this.route.data.subscribe((v: any) => {
    //   this.searchedTerm = v.searchedTerm;
    // });

    this.searchTerm = this.route.snapshot.queryParams['searchTerm'];
    console.log(this.searchTerm);
    this.pokemonServices.getPokemons().subscribe({
      next: (response) => {
        this.pokemons = response;
        this.collectionSize = this.pokemons.length;
        this.refreshPokemon();
        if (this.searchTerm !== null && this.searchTerm !== undefined)
          this.filterPokemon();
        else this.refreshPokemon();
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

  filterPokemon() {
    if (this.searchTerm !== null) {
      this.currpokemons = this.pokemons.filter((pokemon) =>
        pokemon.name.includes(this.searchTerm!)
      );
      console.log(this.currpokemons);
    } else alert('error');
  }
}
