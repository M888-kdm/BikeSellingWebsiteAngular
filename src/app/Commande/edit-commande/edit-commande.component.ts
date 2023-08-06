import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CommandeService } from 'src/app/Service/commande.service';
import { MagasinService } from 'src/app/Service/magasin.service';
import { EmployeService } from 'src/app/Service/employe.service';
import { ClientService } from 'src/app/Service/client-service.service';
import { AddCommandeComponent, CommandeForm } from '../add-commande/add-commande.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'edit-commande',
  templateUrl: '../add-commande/add-commande.component.html',
  styleUrls: ['../add-commande/add-commande.component.scss']
})

export class EditCommandeComponent extends AddCommandeComponent implements OnInit {

  constructor(private route: ActivatedRoute, router: Router, commandeService: CommandeService, employeService: EmployeService, magasinService: MagasinService, clientService: ClientService) {
    super(router, commandeService, employeService, magasinService, clientService);
  }

  override ngOnInit(): void {
    this.entityId = this.route.snapshot.params['commandeId'];
    console.log(this.entityId);
    this.initializeData();
    this.getById();
  }
}