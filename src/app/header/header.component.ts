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
  pokemonform: FormGroup;
  setAlert: boolean = false;
  setError: boolean = false;
  errorMsg: string = '';

  constructor(
    private fb: FormBuilder,
    private pokemonServices: PokemonService
  ) {
    this.pokemonform = fb.group({});
  }
  ngOnInit(): void {
    this.pokemonform = this.fb.group({
      name: this.fb.control('', Validators.required),
      speciality: this.fb.control('', [Validators.required]),
      imageUrl: this.fb.control('', [
        Validators.pattern(
          /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
        ),
        Validators.required,
      ]),
    });
  }
  public get name(): FormControl {
    return this.pokemonform.get('name') as FormControl;
  }
  public get speciality(): FormControl {
    return this.pokemonform.get('speciality') as FormControl;
  }
  public get imageUrl(): FormControl {
    return this.pokemonform.get('imageUrl') as FormControl;
  }
  clearForm() {
    this.name.setValue('');
    this.speciality.setValue('');
    this.imageUrl.setValue('');
  }
  addPokemon() {
    let pokemonobj: PokemonModel = {
      name: this.name.value,
      speciality: this.speciality.value,
      imageUrl: this.imageUrl.value,
    };
    this.pokemonServices.savePokemon(pokemonobj).subscribe({
      next: (response: any) => {
        // this.pokemons.unshift(response);
        // console.log(response);
        this.clearForm();
        this.setAlert = true;
      },
      error: (error) => {
        this.setError = true;
        this.errorMsg = error.message;
      },
    });
  }
  setAlertFalse() {
    this.setAlert = false;
  }
}
