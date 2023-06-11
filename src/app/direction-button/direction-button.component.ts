import { Component } from '@angular/core';
import { MapsService } from '../service/maps.service';

@Component({
  selector: 'app-direction-button',
  templateUrl: './direction-button.component.html',
  styleUrls: ['./direction-button.component.scss']
})
export class DirectionButtonComponent {
  constructor(private mapsService: MapsService) {}

  getDirection(){
    this.mapsService.getDirection();
  }
}
