import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { getId, getNom, getTelephone, getEmail, getAdresse, getPrenom, getMagasin, getManager } from 'src/utils/utils';
import { ViewEntityComponent } from 'src/app/Entity/view-entity/view-entity.component';
import { EmployeService } from 'src/app/Service/employe.service';

@Component({
  selector: 'view-employe',
  templateUrl: '../../Entity/view-entity/view-entity.component.html',
  styleUrls: ['../../Entity/view-entity/view-entity.component.scss']
})
export class ViewEmployeComponent extends ViewEntityComponent implements OnInit {

  constructor(private employeService: EmployeService, router: Router, modalService: NgbModal){
    super(router, modalService);
    this.service = employeService;
    this.columns = ["ID", "PRENOM", "NOM", "TÉLÉPHONE", 'EMAIL', 'ADRESSE', 'MAGASIN', 'MANAGER'];
    this.fields = [getId, getPrenom,getNom, getTelephone, getEmail, getAdresse, getMagasin, getManager];
    this.editPath = "/employe/edit/";
  }

}