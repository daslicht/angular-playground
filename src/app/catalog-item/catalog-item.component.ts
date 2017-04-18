import { CatalogItem } from './../interfaces/CatalogItem';
import { CatalogService } from './../catalog.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.css']
})
export class CatalogItemComponent implements OnInit {

  @Input() catalogItem: CatalogItem;
  constructor(
      private heroService: CatalogService,
      private route: ActivatedRoute,
      private location: Location
  ) {}

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.heroService.getCatalogItem(+params['id']))
      .subscribe(catalogItem => this.catalogItem = catalogItem);
  }

  goBack(): void {
    this.location.back();
  }

}
