// bing-maps.service.ts
import { Injectable } from '@angular/core';

declare var Microsoft: any;

@Injectable({
  providedIn: 'root'
})
export class BingMapsService {
  private map: any;

  constructor() { }

  loadMap(mapElement: HTMLElement, options: any): void {
    this.map = new Microsoft.Maps.Map(mapElement, options);
  }

  // Add more methods to interact with the map as needed
}
