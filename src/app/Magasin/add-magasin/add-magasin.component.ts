import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddEntityComponent } from 'src/app/Entity/add-entity/add-entity.component';
import { MagasinService } from 'src/app/Service/magasin.service';

@Component({
  selector: 'add-magasin',
  templateUrl: './add-magasin.component.html',
  styleUrls: ['./add-magasin.component.scss']
})

export class AddMagasinComponent extends AddEntityComponent {

  magasins: any = [];
  managers: any = [];

  @ViewChild("MagasinForm")
  MagasinForm!: NgForm;

  constructor(router: Router, protected magasinService: MagasinService) {
    super(router);
    this.service = magasinService;
    this.entityForm = new MagasinForm();
    this.entityUrl = "magasin";
  }

}

export class MagasinForm {

  id: number = 0;
  prenom: string = "";
  nom: string = "";
  telephone: string = "";
  email: string = "";
  ville: string = "";
  adresse: string = "";
  codeZip: string = "";
  etat: string = "";

}