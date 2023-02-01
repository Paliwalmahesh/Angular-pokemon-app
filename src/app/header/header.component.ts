import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export default class HeaderComponent {
  setAlert: boolean = false;
  // @Output() searchedTerm: string = '';
  searchedTerm: string = '';

  constructor(private location: Location, private router: Router) {
    // this.route.queryParams.subscribe((params: Params) => {
    //   this.searchedTerm = params['searchTerm'];
    // });
  }

  setAlertFalse() {
    this.setAlert = false;
  }

  searchPokemons() {
    const input = document.querySelector('#search-input') as HTMLInputElement;
    this.searchedTerm = input.value;
    this.router.navigate(['/pokemons/search'], {
      queryParams: { searchTerm: this.searchedTerm },
    });
    // this.location.go(`/list-search/?searchTerm=${this.searchedTerm}`);
  }

  changeSearchTerm(event: any) {
    console.log(event);
  }
}
