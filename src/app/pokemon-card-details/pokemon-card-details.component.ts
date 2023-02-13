import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonModel } from '../model/pokemon.model';
import { PokemonService } from '../services/pokemon.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pokemon-card-details',
  templateUrl: './pokemon-card-details.component.html',
  styleUrls: ['./pokemon-card-details.component.css'],
})
export class PokemonCardDetailsComponent {
  pokemon: PokemonModel;
  id: number;
  setError: boolean = false;
  errorMsg: string = '';

  constructor(
    private pokemonServices: PokemonService,
    private route: ActivatedRoute,
    private location: Location
  ) {
    this.pokemon = {
      name: '',
      speciality: {
        id: 0,
        name: '',
      },
      imageUrl: '',
    };
    this.id = Number(this.route.snapshot.paramMap.get('id'));
  }
  ngOnInit() {
    this.pokemonServices.getPokemon(this.id).subscribe({
      next: (response) => {
        this.pokemon = response;
        console.log(this.pokemon);
      },
      error: (error) => {
        this.setError = true;
        this.errorMsg = error.message;
      },
    });
  }

  goBack(): void {
    this.location.back();
  }
}
