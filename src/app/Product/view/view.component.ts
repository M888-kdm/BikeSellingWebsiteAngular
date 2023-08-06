import { Component, Type } from '@angular/core';
import { ProductService } from 'src/app/Service/product.service';
import { OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgModalConfirm } from 'src/utils/modal';
import { getCategorie, getId, getMarque, getNom, getPrixDepart } from 'src/utils/utils';
import { ViewEntityComponent } from 'src/app/Entity/view-entity/view-entity.component';

const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};
@Component({
  selector: 'view',
  templateUrl: '../../Entity/view-entity/view-entity.component.html',
  styleUrls: ['../../Entity/view-entity/view-entity.component.scss']
})
export class ViewComponent extends ViewEntityComponent implements OnInit {

  constructor(private productService: ProductService, router: Router, modalService: NgbModal){
    super(router, modalService);
    this.service = productService;
    this.columns = ["ID", "NOM", "PRIX DÉPART", "CATÉGORIE", "MARQUE"];
    this.fields = [getId, getNom, getPrixDepart, getCategorie, getMarque];
    this.editPath = "/product/edit/";
  }

}
