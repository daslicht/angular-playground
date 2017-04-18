import { VideoService } from './video.service';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoCollectionComponent } from './video-collection/video-collection.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoComponent } from './video.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    VideoComponent,
    VideoCollectionComponent,
    VideoListComponent
  ],
  providers: [ VideoService ],
})
export class VideoModule { }
