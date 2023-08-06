import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddEntityComponent } from 'src/app/Entity/add-entity/add-entity.component';
import { EmployeService } from 'src/app/Service/employe.service';
import { MagasinService } from 'src/app/Service/magasin.service';

@Component({
  selector: 'add-employe',
  templateUrl: './add-employe.component.html',
  styleUrls: ['./add-employe.component.scss']
})

export class AddEmployeComponent extends AddEntityComponent {

  magasins: any = [];
  managers: any = [];

  @ViewChild("EmployeForm")
  EmployeForm!: NgForm;

  constructor(router: Router, protected employeService: EmployeService, protected magasinService: MagasinService) {
    super(router);
    this.service = employeService;
    this.entityForm = new EmployeForm();
    this.entityUrl = "employe";
  }

  override ngOnInit(): void {
    this.magasinService.get().subscribe((data: any) => {
      this.magasins = data;
    })
    this.employeService.get().subscribe((data: any) => {
      this.managers = data;
    });
  }

  onChangeMagasin(value: any) {
    this.entityForm.magasin = {
      id: value
    }
  }

  onChangeManager(value: any) {
    this.entityForm.manager = {
      id: value
    }
  }

}

export class EmployeForm {

  id: number = 0;
  prenom: string = "";
  nom: string = "";
  telephone: string = "";
  email: string = "";
  ville: string = "";
  adresse: string = "";
  codeZip: string = "";
  etat: string = "";
  magasin: Object = {};
  manager: Object = {};

}