import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddCategorieComponent } from '../add-categorie/add-categorie.component';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'edit-categorie',
  templateUrl: '../add-categorie/add-categorie.component.html',
  styleUrls: ['../add-categorie/add-categorie.component.scss']
})

export class EditCategorieComponent extends AddCategorieComponent implements OnInit {

  constructor(private route: ActivatedRoute, router: Router, categorieService: CategoryService) {
    super(router, categorieService);
  }

  override ngOnInit(): void {
    this.entityId = this.route.snapshot.params['categorieId'];
    this.getById();
  }
  
}