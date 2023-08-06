import { Component, Type } from '@angular/core';
import { OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { ArticleCommandeService } from 'src/app/Service/article-commande.service';
import { NgModalConfirm } from 'src/utils/modal';
import { getQuantite, getPrixDepart, getRemise } from 'src/utils/utils';

const MODALS: { [name: string]: Type<any> } = {
  deleteModal: NgModalConfirm,
};

@Component({
  selector: 'view-articleCommande',
  templateUrl: './view-article-commande.component.html',
  styleUrls: ['./view-article-commande.component.scss']
})
export class ViewArticleCommandeComponent implements OnInit {

  articleCommandes: any = [];
  
  columns: string[] = ["QUANTITE", "PRODUIT", "COMMANDE", "PRIX DEPART", "REMISE"];
  fields: Function[] = [this.getQuantite, this.getName, this.getNumber, getPrixDepart, getRemise];
  editPath: string = "/article/edit/";

  constructor(private articleCommandeService: ArticleCommandeService, private router: Router, private modalService: NgbModal){}

  ngOnInit(): void {
    this.getAllArticleCommandes();
  }

  getQuantite(row: any){
    return row.quantite;
  }

  getName(row: any){
    return row.produit.nom;
  }

  getNumber(row: any){
    return row.commande.numero;
  }

  async getAllArticleCommandes() {
    this.articleCommandeService.get().subscribe((data) => {
      this.articleCommandes = data;
    })
  }

  addArticleCommande() {
    this.router.navigate(['article/add']);
  }

  deleteConfirmation(commande: any, ligne: any){
    this.modalService.open(MODALS['deleteModal'], {
      ariaLabelledBy: 'modal-basic-title'
    }).result.then((result) => {
      this.delete(commande, ligne);
    }, (reason) => {});

  }

  delete(commande: any, ligne: any){
    this.articleCommandeService.delete(commande, ligne).subscribe((data: any) => {
      this.getAllArticleCommandes();
    }, (error: any) => {
      console.log(error);
    })
  }

}
