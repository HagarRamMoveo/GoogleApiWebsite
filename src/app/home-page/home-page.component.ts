/// <reference types="@types/googlemaps" />
import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from '@angular/core';

declare const google: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements AfterViewInit {
  @ViewChild('mapContainer') mapContainer!: ElementRef;

  public map!: google.maps.Map;
  public searchMarker!: google.maps.Marker;
  public defaultMarker!: google.maps.Marker;
  public autocomplete!: google.maps.places.Autocomplete;


  ngAfterViewInit() {
    this.loadGoogleMapsAPI();
  }

  loadGoogleMapsAPI() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDdzBpJxo34zgg7MLWAV5WHBC0SnmqxsBM&libraries=places`;
    script.defer = true;
    script.async = true;
    script.onload = () => this.initializeMap();
    document.body.appendChild(script);
  }
  autocompleteDrop() {
    this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('address-input') as HTMLInputElement
    );
    this.autocomplete.addListener('place_changed', () => {
      const place: google.maps.places.PlaceResult = this.autocomplete.getPlace();
      if (!place.geometry || !place.geometry.location) {
        return;
      }

      if (this.searchMarker) {
        this.searchMarker.setMap(null);
      }

      this.searchMarker = new google.maps.Marker({
        position: place.geometry.location,
        map: this.map,
        title: place.name,
      });

      this.map.setCenter(place.geometry.location);
      this.map.setZoom(15); // Adjust the desired zoom level as needed
    });
  }
  
  initializeMap() {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: 32.06228322103126, lng: 34.77080847356973 },
      zoom: 8,
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);

    this.defaultMarker = new google.maps.Marker({
      position: { lat: 32.06228322103126, lng: 34.77080847356973 },
      map: this.map,
      title: 'Office Location',
    });
   
      }}
    
  

 

