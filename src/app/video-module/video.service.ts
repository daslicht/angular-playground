import { api_url } from './../_config/config';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { VimeoItem } from './../interfaces/vimeo-item';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class VideoService {


  private api_url = api_url; 
  private videoItem$ = new BehaviorSubject(null);

  constructor(private http: Http) { 

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAllVideos(): Promise<VimeoItem[] >  { // BehaviorSubject<VimeoItem[]Promise<VimeoItem[]>
    return this.http.get( this.api_url )
               .toPromise()
               .then( response => response.json().data as VimeoItem[] )
               .catch( this.handleError );
      // this.http.get( this.api_url ).subscribe(response =>{
      //   this.videoItem$.next( response.json().data as VimeoItem[] );
      //   return this.videoItem$;
      // });


              //  .toPromise()
              //  .then( response => response.json().data as VimeoItem[] )
              //  .catch( this.handleError );

  }

  attachVideoToCollection() {

  }

  removeVideoFromCollection() {

  }


}
