import { VimeoItem } from './../../interfaces/vimeo-item';
import { Component, OnInit, Input , AfterViewInit} from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Rx';

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
    /**
     * ERROR Error: Uncaught (in promise): TypeError: Cannot read property 'asObservable' of null
     */
    console.log('VideoListComponenet Input:', this.vimeoItems.asObservable() );
    this.vimeoItems.subscribe( vimeoItems => {
      console.log('VideoListComponent /vimeoItems subscription', vimeoItems);
    });
  }

}
