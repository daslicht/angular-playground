import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
// https://github.com/ReactiveX/rxjs/blob/master/doc/subject.md

@Injectable()
export class StateService implements OnInit {

  private stringState = new BehaviorSubject<string>('initial value');

  constructor() {

    console.log('constructor!');
    this.stringState.subscribe({
        next: (v) => console.log('observerA: ' + v),
        error: (e) => console.log('error', e),
        complete: () => console.log('complete!')
    });

  }

  ngOnInit() {
  }

  doit() {
    console.log('doit!');
    this.stringState.next('String changed');
    this.stringState.complete();
  }
}
