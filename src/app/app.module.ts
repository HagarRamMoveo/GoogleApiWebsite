import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AddressInputComponent } from './address-input/address-input.component';
import { DirectionButtonComponent } from './direction-button/direction-button.component';
import { MapsComponent } from './maps/maps.component';
import { GoogleApiWebsiteComponent } from './google-api-website/google-api-website.component';
import { PokemonWebsiteComponent } from './pokemon-website/pokemon-website.component';
import { LogoComponent } from './logo/logo.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { SelectBarComponent } from './select-bar/select-bar.component';
import { PokemoncardComponent } from './pokemoncard/pokemoncard.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AddressInputComponent,
    DirectionButtonComponent,
    MapsComponent,
    GoogleApiWebsiteComponent,
    PokemonWebsiteComponent,
    LogoComponent,
    PokemoncardComponent,
    SearchInputComponent,
    SelectBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'pokemon-website', component: PokemonWebsiteComponent},
      {path: 'google-maps', component: GoogleApiWebsiteComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
