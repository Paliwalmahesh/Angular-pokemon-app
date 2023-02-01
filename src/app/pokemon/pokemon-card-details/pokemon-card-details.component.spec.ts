import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardDetailsComponent } from './pokemon-card-details.component';

describe('PokemonCardDetailsComponent', () => {
  let component: PokemonCardDetailsComponent;
  let fixture: ComponentFixture<PokemonCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
