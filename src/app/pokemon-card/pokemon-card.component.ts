import { Component, Input } from '@angular/core';
import { PokemonModel, specialityModel } from '../model/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input() pokemon: PokemonModel = {
    name: '',
    speciality: {
      id: 0,
      name: '',
    },
    imageUrl: '',
  };
  constructor() {
    console.log('[pokemon' + this.pokemon.speciality);
    console.log(this.pokemon);
  }
}
