import { Component, OnInit, Type } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NgModalConfirm } from 'src/utils/modal';
import { Router } from '@angular/router';

const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};

@Component({
  selector: 'app-view-entity',
  templateUrl: './view-entity.component.html',
  styleUrls: ['./view-entity.component.scss']
})
export class ViewEntityComponent implements OnInit{

  objects: any = [];
  columns: string[] = [];
  fields: Function[] = [];
  entityUrl: string = "";
  editPath: string = "";
  name: string = "";
  service: any;

  constructor(private router: Router, private modalService: NgbModal){
  }

  ngOnInit(): void {
    this.getAllObjects();
  }

  getAllObjects() {
    this.service.get().subscribe((data: any) => {
      this.objects = data;
    })
  }

  add() {
    this.router.navigate([`${this.entityUrl}/add`]);
  }

  deleteConfirmation(objectId: any){
    this.modalService.open(MODALS['deleteModal'], {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then((result) => {
      this.delete(objectId);
    }, (reason) => {});

  }

  delete(objectId: any){
    this.service.delete(objectId).subscribe((data: any) => {
      this.getAllObjects();
    }, (error: any) => {
      console.log(error);
    })
  }

}
