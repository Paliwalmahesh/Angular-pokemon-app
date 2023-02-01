import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonListComponentComponent } from './pokemon-list-component/pokemon-list-component.component';
import { PokemonCardDetailsComponent } from './pokemon-card-details/pokemon-card-details.component';
import { ModelComponentComponent } from './model-component/model-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {
  NgbModalModule,
  NgbPaginationModule,
} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    PokemonCardComponent,
    PokemonListComponentComponent,
    PokemonCardDetailsComponent,
    ModelComponentComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbPaginationModule,
  ],
})
export class PokemonModule {}
