import { Component, Type } from '@angular/core';
import { MarqueService } from 'src/app/Service/marque.service';
import { OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgModalConfirm } from 'src/utils/modal';
import { getId, getNom } from 'src/utils/utils';
import { ViewEntityComponent } from 'src/app/Entity/view-entity/view-entity.component';


@Component({
  selector: 'view-marque',
  templateUrl: '../../Entity/view-entity/view-entity.component.html',
  styleUrls: ['../../Entity/view-entity/view-entity.component.scss']
})
export class ViewMarqueComponent extends ViewEntityComponent implements OnInit {

  constructor(private marqueService: MarqueService, router: Router, modalService: NgbModal){
    super(router, modalService);
    this.service = marqueService;
    this.columns = ["ID", "NOM"];
    this.fields = [getId, getNom];
    this.editPath = "/marque/edit/";
    this.entityUrl = "marque";
    this.name = "marques"
  }

}
