import { Component, Type } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { getId, getNom, getTelephone, getEmail, getAdresse, getPrenom } from 'src/utils/utils';
import { ViewEntityComponent } from 'src/app/Entity/view-entity/view-entity.component';
import { MagasinService } from 'src/app/Service/magasin.service';

@Component({
  selector: 'view-magasin',
  templateUrl: '../../Entity/view-entity/view-entity.component.html',
  styleUrls: ['../../Entity/view-entity/view-entity.component.scss']
})
export class ViewMagasinComponent extends ViewEntityComponent implements OnInit {

  constructor(private magasinService: MagasinService, router: Router, modalService: NgbModal){
    super(router, modalService);
    this.service = magasinService;
    this.columns = ["ID", "PRENOM", "NOM", "TÉLÉPHONE", 'EMAIL', 'ADRESSE'];
    this.fields = [getId, getPrenom,getNom, getTelephone, getEmail, getAdresse];
    this.editPath = "/magasin/edit/";
    this.entityUrl = "magasin";
    this.name = "magasins";
  }

}