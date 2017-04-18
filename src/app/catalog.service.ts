import { CatalogItem } from './interfaces/CatalogItem';
import { Injectable } from '@angular/core';

@Injectable()
export class CatalogService {

  private catalogItems: CatalogItem[] = [
    {id: 1, name: 'Item 1'},
    {id: 2, name: 'Item 2'},
    {id: 3, name: 'Item 3'},
  ];

  constructor() { }

  getCatalogItems(): Promise<CatalogItem[]> {
    return Promise.resolve(this.catalogItems);
  }

  getCatalogItem( id: number ) {
    return this.getCatalogItems().then(
      catalogItems => catalogItems.find( catalogItem => catalogItem.id === id )
    );
  }

}
