import { Component, Input } from '@angular/core';
import { PokemonModel } from '../model/pokemon.model';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css'],
})
export class PokemonCardComponent {
  @Input() pokemon: PokemonModel ;
  constructor(){
    this.pokemon = {
      name :"",
      speciality:  '',
      imageUrl: '',
    }
  }
}
