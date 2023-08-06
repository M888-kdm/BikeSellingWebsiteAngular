import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { getId, getNom, getTelephone, getEmail, getAdresse, getPrenom } from 'src/utils/utils';
import { ViewEntityComponent } from 'src/app/Entity/view-entity/view-entity.component';
import { ClientService } from 'src/app/Service/client-service.service';

@Component({
  selector: 'view-client',
  templateUrl: '../../Entity/view-entity/view-entity.component.html',
  styleUrls: ['../../Entity/view-entity/view-entity.component.scss']
})
export class ViewClientComponent extends ViewEntityComponent implements OnInit {

  constructor(private clientService: ClientService, router: Router, modalService: NgbModal){
    super(router, modalService);
    this.service = clientService;
    this.columns = ["ID", "PRENOM", "NOM", "TÉLÉPHONE", 'EMAIL', 'ADRESSE'];
    this.fields = [getId, getPrenom,getNom, getTelephone, getEmail, getAdresse];
    this.editPath = "/client/edit/";
  }

}