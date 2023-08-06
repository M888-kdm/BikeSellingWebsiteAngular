import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddEntityComponent } from 'src/app/Entity/add-entity/add-entity.component';
import { MarqueService } from 'src/app/Service/marque.service';

@Component({
  selector: 'add-marque',
  templateUrl: './add-marque.component.html',
  styleUrls: ['./add-marque.component.scss']
})

export class AddMarqueComponent extends AddEntityComponent {

  marques: any = [];
  managers: any = [];

  @ViewChild("MarqueForm")
  MarqueForm!: NgForm;

  constructor(router: Router, protected marqueService: MarqueService) {
    super(router);
    this.service = marqueService;
    this.entityForm = new MarqueForm();
    this.entityUrl = "marque";
  }

}

export class MarqueForm {

  id: number = 0;
  nom: string = "";

}