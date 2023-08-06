import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddEntityComponent } from 'src/app/Entity/add-entity/add-entity.component';
import { MagasinService } from 'src/app/Service/magasin.service';
import { ProductService } from 'src/app/Service/product.service';
import { StockService } from 'src/app/Service/stock.service';

@Component({
  selector: 'add-employe',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.scss']
})

export class AddStockComponent extends AddEntityComponent {

  magasins: any = [];
  products: any = [];

  @ViewChild("StockForm")
  EmployeForm!: NgForm;

  constructor(router: Router, protected stockService: StockService, protected magasinService: MagasinService, protected productService: ProductService) {
    super(router);
    this.service = stockService;
    this.entityUrl = "stock";
    this.entityForm = new StockForm();
  }

  override ngOnInit(): void {
    this.initializeData();
  }

  initializeData(){
    this.magasinService.get().subscribe((data: any) => {
      this.magasins = data;
    })
    this.productService.get().subscribe((data: any) => {
      this.products = data;
    });
  }

  onChangeProduct(value: any) {
    // this.entityForm.produit = {
    //   id: value
    // }
    this.entityForm.stockPK.produitId = value;
  }

  onChangeMagasin(value: any) {
    // this.entityForm.magasin = {
    //   id: value
    // }
    this.entityForm.stockPK.magasinId = value;
  }

}

export class StockForm {

  stockPK: Object = {};
  quantite: number = 0;
  produit: Object = {};
  magasin: Object = {};

}