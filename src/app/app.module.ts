import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GmapsComponent } from './gmaps/gmaps.component';
import { BmapsComponent } from './bmaps/bmaps.component';
import { GoogleMapsModule } from '@angular/google-maps'
import { MapsModule } from '@syncfusion/ej2-angular-maps'

@NgModule({
  declarations: [
    AppComponent,
    GmapsComponent,
    BmapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    MapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
