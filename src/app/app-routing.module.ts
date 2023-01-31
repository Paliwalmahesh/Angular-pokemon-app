import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponentComponent } from './pokemon-list-component/pokemon-list-component.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PokemonCardDetailsComponent } from './pokemon-card-details/pokemon-card-details.component';

const routes: Routes = [
  { path: 'list', component: PokemonListComponentComponent },
  { path: 'details/:id', component: PokemonCardDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
