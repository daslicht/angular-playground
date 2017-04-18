import { VideoComponent } from './video-module/video.component';

import { HomeComponent } from './home/home.component';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { CatalogComponent } from './catalog/catalog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'catalog',
        component: CatalogComponent
    },
    {
        path: 'catalog-item/:id',
        component: CatalogItemComponent
    },
    {
        path: 'video-collection',
        component: VideoComponent
    },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}


