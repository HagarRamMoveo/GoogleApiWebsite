/// <reference types="@types/googlemaps" />

import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { MapsService } from '../service/maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.scss']
})
export class MapsComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;

  constructor(private mapsService: MapsService) {}

  ngAfterViewInit() {
    this.mapsService.mapContainer = this.mapContainer;
    this.mapsService.loadGoogleMapsAPI();

  }
}
