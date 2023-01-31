import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponentComponent } from './pokemon-list-component/pokemon-list-component.component';
import { PokemonCardDetailsComponent } from './pokemon-card-details/pokemon-card-details.component';

const routes: Routes = [
  {
    path: 'list',
    component: PokemonListComponentComponent,
    // data: { searchedTerm: 'bulba' },
  },
  { path: 'details/:id', component: PokemonCardDetailsComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'list-search', component: PokemonListComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
