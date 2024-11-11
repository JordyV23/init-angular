import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map } from 'mapbox-gl';

@Component({
  templateUrl: './zoom-range-page.component.html',
  styleUrl: './zoom-range-page.component.css',
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy {

  // Zoom
  public zoom: number = 18;
  // Objeto de Mapa
  public map?: Map;

  public lngLat: LngLat = new LngLat( -84.11799237846623, 9.942699409791624);

  @ViewChild('map') divMap?: ElementRef;

  ngAfterViewInit(): void {
    if (!this.divMap) return;

    this.map = new Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom
    });

    this.mapListener();
  }

  ngOnDestroy(): void {
    // Elimina todo el mapa y los listeners
    this.map?.remove()
  }

  mapListener() {
    if (!this.map) return;

    this.map.on('zoom', (ev) => {
      this.zoom = this.map!.getZoom();
    });

    this.map.on('zoomend', (ev) => {
      if (this.map!.getZoom() < 18) return;
      this.map!.zoomTo(18);
    });

    this.map.on('move', () => {
      this.lngLat = this.map!.getCenter();
    });
  }

  zoomIn = () => {
    this.map?.zoomIn();
  };
  zoomOut = () => {
    this.map?.zoomOut();
  };

  zoomChanged = (value: string) => {
    const newZoom = Number(value);
    this.zoom = newZoom;
    this.map?.zoomTo(newZoom);
  };
}
