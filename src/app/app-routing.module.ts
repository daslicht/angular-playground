import { CounterComponent } from './counter/counter.component';
import { StoreModule } from '@ngrx/store';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { counterReducer } from './counter/counter.reducer';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: CounterComponent
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    StoreModule.provideStore({ counter: counterReducer })
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


