import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AddEntityComponent } from 'src/app/Entity/add-entity/add-entity.component';
import { CommandeService } from 'src/app/Service/commande.service';
import { ArticleCommandeService } from 'src/app/Service/article-commande.service';
import { ProductService } from 'src/app/Service/product.service';

@Component({
  selector: 'add-employe',
  templateUrl: './add-article-commande.component.html',
  styleUrls: ['./add-article-commande.component.scss']
})

export class AddArticleCommandeComponent extends AddEntityComponent {

  produits: any = [];
  commandes: any = [];

  @ViewChild("ArticleCommandeForm")
  EmployeForm!: NgForm;

  constructor(router: Router, protected articleCommandeService: ArticleCommandeService, protected commandeService: CommandeService, protected produitService: ProductService) {
    super(router);
    this.service = articleCommandeService;
    this.entityUrl = "article";
    this.entityForm = new ArticleCommandeForm();
  }

  override ngOnInit(): void {
    this.initializeData();
  }

  initializeData(){
    this.produitService.get().subscribe((data: any) => {
      this.produits = data;
    })
    this.commandeService.get().subscribe((data: any) => {
      this.commandes = data;
    });
  }

  onChangeCommande(value: any) {
    this.entityForm.commande = {
      id: value
    }
  }

  onChangeProduct(value: any) {
    this.entityForm.produit = {
      id: value
    }
  }

}

export class ArticleCommandeForm {

  articleCommandePK: Object = {};
  quantite: number = 0;
  remise: number = 0;
  prixDepart: number = 0;
  produit: Object = {};
  commande: Object = {};

}