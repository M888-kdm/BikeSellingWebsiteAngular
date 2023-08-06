import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StockService } from 'src/app/Service/stock.service';
import { ProductService } from 'src/app/Service/product.service';
import { MagasinService } from 'src/app/Service/magasin.service';
import { AddStockComponent, StockForm } from '../add-stock/add-stock.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit-stock',
  templateUrl: '../add-stock/add-stock.component.html',
  styleUrls: ['../add-stock/add-stock.component.scss']
})

export class EditStockComponent extends AddStockComponent implements OnInit {  

  magasinId: number = 0;
  produitId: number = 0;

  constructor(private route: ActivatedRoute, router: Router, stockService: StockService, magasinService: MagasinService, productService: ProductService) {
    super(router, stockService, magasinService, productService);
    this.magasinId = this.route.snapshot.params['magasinId'];
    this.produitId = this.route.snapshot.params['productId'];
  }

  protected override getById(): void {
    this.stockService.get(this.magasinId, this.produitId).subscribe((data: any) => {
      this.entityForm = data;
    }, (error: any) => {
      console.log(error);
    });
  } 

  override ngOnInit(): void {

    this.initializeData();
    this.getById();
    
  }

}