/// <reference types="@types/googlemaps" />
import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MapsService } from '../service/maps.service';

declare const google: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {

}
