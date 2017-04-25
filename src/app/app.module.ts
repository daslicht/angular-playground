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
    TestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    VideoModule,
    TestModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
