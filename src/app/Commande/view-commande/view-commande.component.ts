import { Component, Type } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { getNumero, getDateCommande, getDateLivraison, getClient, getVendeur, getMagasinBis } from 'src/utils/utils';
import { ViewEntityComponent } from 'src/app/Entity/view-entity/view-entity.component';
import { CommandeService } from 'src/app/Service/commande.service';

@Component({
  selector: 'view-magasin',
  templateUrl: '../../Commande/view-commande/view-commande.component.html',
  styleUrls: ['../../Commande/view-commande/view-commande.component.scss']
})
export class ViewCommandeComponent extends ViewEntityComponent implements OnInit {

  constructor(private commandeService: CommandeService, router: Router, modalService: NgbModal){
    super(router, modalService);
    this.service = commandeService;
    this.columns = ["NUMERO", "DATE COMMANDE", "DATE LIVRAISON", "CLIENT", "VENDEUR", "MAGASIN"];
    this.fields = [getNumero, getDateCommande, getDateLivraison, getClient, getVendeur, getMagasinBis];
    this.editPath = "/commande/edit/";
  }

  override ngOnInit(): void {
    this.getAllObjects();
  }

}