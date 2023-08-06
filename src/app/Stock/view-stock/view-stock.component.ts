import { Component, Type } from '@angular/core';
import { StockService } from 'src/app/Service/stock.service';
import { OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NgModalConfirm } from 'src/utils/modal';
import { getMagasin, getProduit, getQuantite } from 'src/utils/utils';

const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};
@Component({
  selector: 'view-stock',
  templateUrl: './view-stock.component.html',
  styleUrls: ['./view-stock.component.scss']
})
export class ViewStockComponent implements OnInit {
  stocks: any = [];

  columns: string[] = ["QUANTITE", "PRODUIT", "MAGASIN"];
  fields: Function[] = [getQuantite, getProduit, getMagasin];
  editPath: string = "/stock/edit/";

  constructor(private stockService: StockService, private router: Router, private modalService: NgbModal){}

  ngOnInit(): void {
    this.getAllStocks();
  }

  async getAllStocks() {
    this.stockService.get().subscribe((data) => {
      this.stocks = data;
    })
  }

  addStock() {
    this.router.navigate(['stock/add']);
  }

  deleteConfirmation(magasin: number, produit: number){
    this.modalService.open(MODALS['deleteModal'], {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then((result) => {
      this.delete(magasin, produit);
    }, (reason) => {});

  }

  delete(magasin: any, produit: any){
    this.stockService.delete(magasin, produit).subscribe((data: any) => {
      this.getAllStocks();
    }, (error: any) => {
      console.log(error);
    })
  }

}
