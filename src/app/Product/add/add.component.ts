import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddEntityComponent } from 'src/app/Entity/add-entity/add-entity.component';
import { ProductService } from 'src/app/Service/product.service';
import { MarqueService } from 'src/app/Service/marque.service';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'add-product',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent extends AddEntityComponent {

  marques: any = [];
  categories: any = [];

  @ViewChild("ProductForm")
  ProductForm!: NgForm;

  constructor(router: Router, protected productService: ProductService, protected marqueService: MarqueService, protected categoryService: CategoryService) {
    super(router);
    this.service = productService;
    this.entityUrl = "product";
    this.entityForm = new ProductForm();
  }

  override ngOnInit(): void {
    this.initializeData();
  }

  initializeData(){
    this.marqueService.get().subscribe((data: any) => {
      this.marques = data;
    })
    this.categoryService.get().subscribe((data: any) => {
      this.categories = data;
    });
  }

  onChangeMarque(value: any) {
    this.entityForm.marque = {
      id: value
    }
  }

  onChangeCategorie(value: any) {
    this.entityForm.categorie = {
      id: value
    }
  }

}

export class ProductForm {

  id: number = 0;
  nom: string = "";
  anneeModel: number = 0;
  prixDepart: number = 0;
  marque: Object = {};
  categorie: Object = {};

}