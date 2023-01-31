import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PokemonModel } from '../model/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export default class HeaderComponent {
  setAlert: boolean = false;

  constructor() {}

  setAlertFalse() {
    this.setAlert = false;
  }
}
