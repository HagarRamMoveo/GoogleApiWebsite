import { Component, EventEmitter, Output } from '@angular/core';
import {  PokemoncardComponent } from '../pokemoncard/pokemoncard.component';
import { PokemonService } from '../service/pokemon.service';
@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent {

  constructor(){ }

  @Output() searchData = new EventEmitter<string>();

  filterData(searchInput:string){
  this.searchData.emit(searchInput);
  }

}