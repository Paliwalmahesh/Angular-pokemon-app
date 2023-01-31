import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { PokemonModel } from './model/pokemon.model';
import { PokemonService } from './services/pokemon.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Incubyte';
  allPokemon: PokemonModel[];
  pokemons: PokemonModel[] = [];
  pokemonform: FormGroup;
  setAlert: boolean = false;
  setError: boolean = false;
  errorMsg: string = '';
  constructor(
    private fb: FormBuilder,
    private pokemonServices: PokemonService
  ) {
    this.pokemonform = fb.group({});
    this.allPokemon = [];
  }

  ngOnInit(): void {
    this.pokemonform = this.fb.group({
      name: this.fb.control('', Validators.required),
      speciality: this.fb.control('', [Validators.required, Validators.email]),
      imageUrl: this.fb.control(
        '',
        Validators.pattern(
          /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi
        )
      ),
    });
    this.pokemonServices.getPokemons().subscribe({
      next: (response) => {
        this.pokemons = response;
      },
      error: (error) => {
        this.setError = true;
        this.errorMsg = error.message;
        // console.log(error);
      },
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

  setAlertFalse() {
    this.setAlert = false;
    console.log(this.setAlert);
  }
  setErrorFalse() {
    this.setError = false;
  }

  addPokemon() {
    let pokemonobj: PokemonModel = {
      name: this.name.value,
      speciality: this.speciality.value,
      imageUrl: this.imageUrl.value,
    };
    this.pokemonServices.savePokemon(pokemonobj).subscribe({
      next: (response: any) => {
        this.pokemons.unshift(response);
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
}
