import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponentComponent } from './pokemon-list-component/pokemon-list-component.component';
import { PokemonTableComponent } from './pokemon-table/pokemon-table.component';

const routes: Routes = [
  { path: 'list', component: PokemonListComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
