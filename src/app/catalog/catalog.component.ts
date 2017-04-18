import { CatalogItem } from './../interfaces/CatalogItem';
import { CatalogService } from './../catalog.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  public catalogItems: CatalogItem[];

  constructor(
    private catalogService: CatalogService
  ) {}

  ngOnInit() {
    this.getCatalogItems();
  }


  getCatalogItems() {
    this.catalogService.getCatalogItems().then(
      catalogItems => this.catalogItems = catalogItems
    );
  }

  /**
   * this.router.navigate(['/detail', this.selectedHero.id]);
   */

}
