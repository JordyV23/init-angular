import { Component, ElementRef, ViewChild } from '@angular/core';
import { LngLat, Map, Marker } from 'mapbox-gl';

interface MarkerAndColor {
  color: string;
  marker: Marker;
}

interface PlainMarker {
  color: string;
  lngLat: number[];
}

@Component({
  templateUrl: './markers-page.component.html',
  styleUrl: './markers-page.component.css',
})
export class MarkersPageComponent {
  // Zoom
  public zoom: number = 13;
  // Objeto de Mapa
  public map?: Map;

  public markers: MarkerAndColor[] = [];

  // Ubicacion Inicial
  public currentLngLat: LngLat = new LngLat(
    -84.11799237846623,
    9.942699409791624
  );

  @ViewChild('markersPageMap') divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) return;

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.readFromLocalStorage();

    // this.mapListener();

    // const marker = new Marker().setLngLat(this.currentLngLat).addTo(this.map);
  }

  mapListener() {
    if (!this.map) return;

    this.map!.on('dragend', () => {
      this.saveToLocalStorage();
    });
  }

  createMarker() {
    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, (y) =>
      ((Math.random() * 16) | 0).toString(16)
    );
    const lngLat = this.map!.getCenter();
    this.addMarker(lngLat, color);
  }

  addMarker(lngLat: LngLat, color: string) {
    if (!this.map) return;

    const marker = new Marker({
      color,
      draggable: true,
    })
      .setLngLat(lngLat)
      .addTo(this.map);

    this.markers.push({ color, marker });

    this.saveToLocalStorage();

    marker.on('dragend', () => {
      this.saveToLocalStorage();
    });
  }

  deleteMarker(index: number) {
    this.markers[index].marker.remove();
    this.markers.splice(index, 1);
  }

  flyTo(marker: Marker) {
    this.map?.flyTo({ zoom: 14, center: marker.getLngLat() });
  }

  saveToLocalStorage() {
    const plainMarkers: PlainMarker[] = this.markers.map(
      ({ color, marker }) => {
        return {
          color,
          lngLat: marker.getLngLat().toArray(),
        };
      }
    );

    localStorage.setItem('plainMarkers', JSON.stringify(plainMarkers));
  }

  readFromLocalStorage() {
    const plainMarkersString = localStorage.getItem('plainMarkers') ?? '[]';
    const plainMarkers: PlainMarker[] = JSON.parse(plainMarkersString);

    plainMarkers.forEach(({ color, lngLat }) => {
      const [lng, lat] = lngLat;
      const coordenates = new LngLat(lng, lat);

      this.addMarker(coordenates, color);
    });
  }
}
