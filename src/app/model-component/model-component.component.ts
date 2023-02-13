import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { pokemonCreate, PokemonModel } from '../model/pokemon.model';
import { PokemonService } from '../services/pokemon.service';

@Component({
  standalone: true,
  selector: 'ngbd-modal-content',
  templateUrl: './modal-component.component.html',
  imports: [ReactiveFormsModule, CommonModule],
})
export class NgbdModalContent {
  // @Input() name;
  pokemonForm: FormGroup;
  setAlert: boolean = false;
  setError: boolean = false;
  errorMsg: string = '';

  constructor(
    public activeModal: NgbActiveModal,
    public fb: FormBuilder,
    public pokemonServices: PokemonService
  ) {
    this.pokemonForm = fb.group({});
  }

  ngOnInit(): void {
    this.pokemonForm = this.fb.group({
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
    return this.pokemonForm.get('name') as FormControl;
  }
  public get speciality(): FormControl {
    return this.pokemonForm.get('speciality') as FormControl;
  }
  public get imageUrl(): FormControl {
    return this.pokemonForm.get('imageUrl') as FormControl;
  }
  clearForm() {
    this.name.setValue('');
    this.speciality.setValue(0);
    this.imageUrl.setValue('');
  }
  addPokemon() {
    let pokemonobj: pokemonCreate = {
      name: this.name.value,
      specialityId: this.speciality.value,
      imageUrl: this.imageUrl.value,
    };
    this.pokemonServices.savePokemon(pokemonobj).subscribe({
      next: (response: any) => {
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

@Component({
  selector: 'app-model-component',
  templateUrl: './model-component.component.html',
  styleUrls: ['./model-component.component.css'],
})
export class ModelComponentComponent {
  constructor(private modalService: NgbModal) {}

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    // modalRef.componentInstance.name = 'World';
  }
}
