import { VideoService } from './../video.service';
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

  // @Input() vimeoItems: Subject<VimeoItem[]>;
  public videoItems: Subject<VimeoItem[]>;


  constructor(
    private videoService: VideoService
  ) { }

  ngOnInit() {
    this.videoService.getAllVideos();
    // console.log('VideoListComponenet Input:', this.vimeoItems.asObservable() );
    this.videoService.videoItems.subscribe( videoItems => {
      console.log('VideoListComponent /vimeoItems subscription', videoItems);
      this.videoItems = videoItems;
    }); 


  };

  ngAfterViewInit() {
  }

}
