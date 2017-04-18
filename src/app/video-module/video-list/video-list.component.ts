import { VimeoItem } from './../../interfaces/vimeo-item';
import { Component, OnInit, Input , AfterViewInit} from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit, AfterViewInit {

  @Input() vimeoItems: Subject<VimeoItem[]>;
  constructor() { }

  ngOnInit() {};

  ngAfterViewInit() {
    console.log('VideoListComponenet Input:', this.vimeoItems.asObservable() );
    this.vimeoItems.subscribe( vimeoItems => {
      console.log('VideoListComponent /vimeoItems subscription', vimeoItems);
    });
  }

  addToCollection( vimeoItem: VimeoItem ) {
    console.log('vimeoItem', vimeoItem );
  }

}
