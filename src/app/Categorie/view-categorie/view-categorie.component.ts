import { Component, Type } from '@angular/core';
import { CategoryService } from 'src/app/Service/category.service';
import { OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgModalConfirm } from 'src/utils/modal';
import { getId, getNom } from 'src/utils/utils';
import { ViewEntityComponent } from 'src/app/Entity/view-entity/view-entity.component';


@Component({
  selector: 'view-categorie',
  templateUrl: '../../Entity/view-entity/view-entity.component.html',
  styleUrls: ['../../Entity/view-entity/view-entity.component.scss']
})
export class ViewCategorieComponent extends ViewEntityComponent implements OnInit {

  constructor(private categorieService: CategoryService, router: Router, modalService: NgbModal){
    super(router, modalService);
    this.service = categorieService;
    this.columns = ["ID", "NOM"];
    this.fields = [getId, getNom];
    this.editPath = "/categorie/edit/";
  }

}
