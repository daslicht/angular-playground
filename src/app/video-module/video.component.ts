import { VimeoItem } from './../interfaces/vimeo-item';
import { VideoService } from './video.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  public vimeoItems: Subject<VimeoItem[]>  =  new Subject();

  constructor( private videoService: VideoService) { }

  ngOnInit() {
    this.videoService.getAllVideos().then(  (vimeoItems: VimeoItem[]) => {
        this.vimeoItems.next( vimeoItems );
    });

    this.vimeoItems.subscribe( response => {
      console.log('VideoComponent / vimeoItems subscription', response);
    });
    // subscribe( ( vimeoItems: VimeoItem[] ) => {
    //   console.log('response', vimeoItems );

    // });
  }

}
