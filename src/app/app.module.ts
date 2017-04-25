import { VideoListComponent } from './video-module/video-list/video-list.component';
import { VideoService } from './video-module/video.service';
import { VideoComponent } from './video-module/video.component';
import { TestComponent } from './test/test/test.component';
import { TestModule } from './test/test.module';
import { VideoModule } from './video-module/video.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    VideoComponent,
    VideoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
  providers: [ VideoService]
})
export class AppModule { }
