import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddEntityComponent } from 'src/app/Entity/add-entity/add-entity.component';
import { MagasinService } from 'src/app/Service/magasin.service';
import { ClientService } from 'src/app/Service/client-service.service';

@Component({
  selector: 'add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.scss']
})

export class AddClientComponent extends AddEntityComponent {

  magasins: any = [];
  managers: any = [];

  @ViewChild("clientForm")
  clientForm!: NgForm;

  constructor(router: Router, protected clientService: ClientService) {
    super(router);
    this.service = clientService;
    this.entityForm = new clientForm();
    this.entityUrl = "client";
  }

}

export class clientForm {

  id: any;
  nom: string = "";
  telephone: string = "";
  email: string = "";
  ville: string = "";
  adresse: string = "";
  codeZip: string = "";
  etat: string = "";

}