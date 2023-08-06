import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/Service/product.service';
import { AddComponent } from '../add/add.component';
import { CategoryService } from 'src/app/Service/category.service';
import { MarqueService } from 'src/app/Service/marque.service';
import { ProductForm } from '../add/add.component';

@Component({
  selector: 'edit-product',
  templateUrl: '../add/add.component.html',
  styleUrls: ['../add/add.component.scss']
})

export class EditComponent extends AddComponent implements OnInit {

  constructor(private route: ActivatedRoute, router: Router, productService: ProductService, marqueService: MarqueService, categorieService: CategoryService) {
    super(router, productService, marqueService, categorieService);
  }

  override ngOnInit(): void {
    this.entityId = this.route.snapshot.params['productId'];
    this.initializeData();
    this.getById();
  }
  
}