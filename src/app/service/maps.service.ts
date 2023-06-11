import { ElementRef, Injectable, ViewChild } from '@angular/core';
const moveolat:number = 32.06228322103126;
const moveoLng:number = 34.77080847356973;
declare const google: any;
@Injectable({
  providedIn: 'root',
})
export class MapsService {
  constructor() {}

  @ViewChild('mapContainer') mapContainer!: ElementRef;

  map!: google.maps.Map;
  searchMarker!: google.maps.Marker;
  defaultMarker!: google.maps.Marker;
  autocomplete!: google.maps.places.Autocomplete;
  directionsService!: google.maps.DirectionsService;
  directionsDisplay!: google.maps.DirectionsRenderer;


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
      const place: google.maps.places.PlaceResult =
        this.autocomplete.getPlace();
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
      this.map.setZoom(15);
    });
  }

  getDirection() {
    if (!this.searchMarker || !this.searchMarker.getPosition()) {
      return;
    }

    const request: google.maps.DirectionsRequest = {
      origin: { lat: moveolat, lng: moveoLng },
      destination: this.searchMarker.getPosition()!,
      travelMode: google.maps.DirectionsTravelMode.DRIVING,
    };

    this.directionsService.route(
      request,
      (
        response: google.maps.DirectionsResult,
        status: google.maps.DirectionsStatus
      ) => {
        if (status === google.maps.DirectionsStatus.OK) {
          this.directionsDisplay.setDirections(response);
        } else {
          alert('Google route unsuccessful!');
        }
      }
    );
  }
  initializeMap() {
    const mapOptions: google.maps.MapOptions = {
      center: { lat: moveolat, lng: moveoLng },
      zoom: 8,
    };

    this.map = new google.maps.Map(this.mapContainer.nativeElement, mapOptions);

    this.defaultMarker = new google.maps.Marker({
      position: { lat: moveolat, lng: moveoLng },
      map: this.map,
      title: 'Office Location',
    });
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer({
      map: this.map,
    });
  }
}
