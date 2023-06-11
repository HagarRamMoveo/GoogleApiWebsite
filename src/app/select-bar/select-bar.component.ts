import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IPokemon } from '../model/pokemon.model';



@Component({
  selector: 'app-select-bar',
  templateUrl: './select-bar.component.html',
  styleUrls: ['./select-bar.component.scss']
})
export class SelectBarComponent {
  pokemonData: IPokemon[] = [];
  filteredPokemonData: IPokemon[] = [];
  constructor() {}

  @Input()
  selectName!: IPokemon[];

  @Output() dataEvent = new EventEmitter<IPokemon[]>();
  
}
