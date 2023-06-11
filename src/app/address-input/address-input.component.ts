import { Component } from '@angular/core';
import { MapsService } from '../service/maps.service';

@Component({
  selector: 'app-address-input',
  templateUrl: './address-input.component.html',
  styleUrls: ['./address-input.component.scss']
})

export class AddressInputComponent {
  constructor(private mapsService: MapsService) {}

  autocompleteDrop(){
    this.mapsService.autocompleteDrop();
  }
}
