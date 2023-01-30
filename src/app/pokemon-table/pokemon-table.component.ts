import { Component, Input } from '@angular/core';
import { PokemonModel } from '../model/pokemon.model';

@Component({
  selector: 'app-pokemon-table',
  templateUrl: './pokemon-table.component.html',
  styleUrls: ['./pokemon-table.component.css'],
})
export class PokemonTableComponent {
  @Input() pokemon: PokemonModel ;
  constructor(){
    this.pokemon = {
      name :"",
      speciality:  '',
      imageUrl: '',
    }
  }
}
