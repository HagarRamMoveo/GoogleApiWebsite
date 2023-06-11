import { Component, Input, TemplateRef } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { IPokemon } from '../model/pokemon.model';

@Component({
  selector: 'app-pokemoncard',
  templateUrl: './pokemoncard.component.html',
  styleUrls: ['./pokemoncard.component.scss'],
})

export class PokemoncardComponent {
  data: IPokemon[]=[];
  pokemonData: IPokemon[] = []
  filteredPokemonData: IPokemon[] = [];
  modalRef: NgbModalRef | null = null;
  selectedPokemon: IPokemon | null = null;
  
  @Input()
  pokemonName!: string;
  @Input()
  pokemonImage!: string;
  @Input()
  pokemonAbilites!:any;
  @Input()
  pokemon!: IPokemon;
  

  constructor( public modalService: NgbModal) { 
  }

  openModal(pokemon: IPokemon, modalContent: TemplateRef<any>) {
    this.selectedPokemon = pokemon;
    this.modalRef = this.modalService.open(modalContent, { centered: true });
  }
  
}