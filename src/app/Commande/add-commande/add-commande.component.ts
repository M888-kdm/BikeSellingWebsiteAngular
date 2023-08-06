import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddEntityComponent } from 'src/app/Entity/add-entity/add-entity.component';
import { ClientService } from 'src/app/Service/client-service.service';
import { CommandeService } from 'src/app/Service/commande.service';
import { EmployeService } from 'src/app/Service/employe.service';
import { MagasinService } from 'src/app/Service/magasin.service';

@Component({
  selector: 'add-commande',
  templateUrl: './add-commande.component.html',
  styleUrls: ['./add-commande.component.scss']
})

export class AddCommandeComponent extends AddEntityComponent {

  magasins: any = [];
  vendeurs: any = [];
  clients: any = [];

  @ViewChild("CommandeForm")
  CommandeForm!: NgForm;

  constructor(router: Router, protected commandeService: CommandeService, protected employeService: EmployeService, protected magasinService: MagasinService, protected clientService: ClientService) {
    super(router);
    this.service = commandeService;
    this.entityForm = new CommandeForm();
    this.entityUrl = "commande";
  }

  override ngOnInit(): void {
    this.initializeData();
  }

  initializeData(){
    this.magasinService.get().subscribe((data: any) => {
      this.magasins = data;
    })
    this.employeService.get().subscribe((data: any) => {
      this.vendeurs = data;
    });
    this.clientService.get().subscribe((data: any) => {
      this.clients = data;
    });
  }

  onChangeMagasin(value: any): void {
    this.entityForm.magasinId = {
      id: value
    }
  }

  onChangeClient(value: any): void {
    this.entityForm.clientId = {
      id: value
    }
  }

  onChangeVendeur(value: any): void {
    this.entityForm.vendeurId = {
      id: value
    }
  }

}

export class CommandeForm {

  numero: number = 0;
  dateCommande: any;
  dateLivraisonVoulue: any;
  dateLivraison: any;
  clientId: Object = {};
  vendeurId: Object = {};
  magasinId: Object = {};

}