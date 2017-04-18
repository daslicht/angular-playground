import { VimeoItem } from './../../interfaces/vimeo-item';
import { Component, OnInit, Input , AfterViewInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-video-collection',
  templateUrl: './video-collection.component.html',
  styleUrls: ['./video-collection.component.css']
})
export class VideoCollectionComponent implements OnInit , AfterViewInit{

  @Input() vimeoCollectionItems: Subject<VimeoItem[]>;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.vimeoCollectionItems.subscribe( vimeoItems => {
      console.log('VideoCollectionComponent /vimeoCollectionItems subscription', vimeoItems);
    });
  }

}
