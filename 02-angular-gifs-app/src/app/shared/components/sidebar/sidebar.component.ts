import { Component, OnInit } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(private gifService: GifsService) {}

  get tagHistoy() {
    return this.gifService.tagHistory;
  }

  searchTag(tag: string) {
    this.gifService.searchTag(tag);
  }
}
