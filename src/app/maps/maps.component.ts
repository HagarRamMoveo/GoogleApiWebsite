import { Component } from '@angular/core';
import { MapsService } from '../service/maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent {
constructor(private _mapService: MapsService){}
  

}
