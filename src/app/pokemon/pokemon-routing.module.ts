import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonCardDetailsComponent } from './pokemon-card-details/pokemon-card-details.component';
import { PokemonListComponentComponent } from './pokemon-list-component/pokemon-list-component.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonListComponentComponent,
  },
  {
    path: 'search',
    component: PokemonListComponentComponent,
    pathMatch: 'full',
  },
  { path: ':id', component: PokemonCardDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonRoutingModule {}
