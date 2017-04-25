import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { VimeoItem } from './../interfaces/vimeo-item';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

/**
 * /src/_config/config.ts
 */
import { api_url } from './../_config/config';


@Injectable()
export class VideoService {


  private api_url = api_url;
  public videoItems = new BehaviorSubject(null);

  constructor(private http: Http) {

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAllVideos() { // BehaviorSubject<VimeoItem[]Promise<VimeoItem[]>
    
    let videoItems = this.http.get( this.api_url )
                      .toPromise()
                      .then( response => response.json().data as VimeoItem[] )
                      .catch( this.handleError );
       
        videoItems.then( result => {
          this.videoItems.next( result );
          //console.log('getAllVideos',result)
        })         
  }

  attachVideoToCollection() {

  }

  removeVideoFromCollection() {

  }


}
