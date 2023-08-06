import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddEntityComponent } from 'src/app/Entity/add-entity/add-entity.component';
import { CategoryService } from 'src/app/Service/category.service';

@Component({
  selector: 'add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.scss']
})

export class AddCategorieComponent extends AddEntityComponent {

  categories: any = [];
  managers: any = [];

  @ViewChild("categorieForm")
  categorieForm!: NgForm;

  constructor(router: Router, protected categoryService: CategoryService) {
    super(router);
    this.service = categoryService;
    this.entityForm = new categorieForm();
    this.entityUrl = "categorie";
  }

}

export class categorieForm {

  id: number = 0;
  nom: string = "";

}