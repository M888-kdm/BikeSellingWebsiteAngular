import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleCommandeService } from 'src/app/Service/article-commande.service';
import { ProductService } from 'src/app/Service/product.service';
import { AddArticleCommandeComponent } from '../add-article-commande/add-article-commande.component';
import { ActivatedRoute } from '@angular/router';
import { CommandeService } from 'src/app/Service/commande.service';

@Component({
  selector: 'edit-articleCommande',
  templateUrl: '../add-article-commande/add-article-commande.component.html',
  styleUrls: ['../add-article-commande/add-article-commande.component.scss']
})

export class EditArticleCommandeComponent extends AddArticleCommandeComponent implements OnInit {  

  commandeId: number = 0;
  ligne: number = 0;

  constructor(private route: ActivatedRoute, router: Router, articleCommandeService: ArticleCommandeService, commandeService: CommandeService, productService: ProductService) {
    super(router, articleCommandeService, commandeService, productService);

    this.commandeId = this.route.snapshot.params['commandeId'];
    this.ligne = this.route.snapshot.params['ligne'];

    console.log(this.commandeId);
    console.log(this.ligne);
  }

  protected override getById(): void {
    this.articleCommandeService.get(this.commandeId, this.ligne).subscribe((data: any) => {
      this.entityForm = data;
    }, (error: any) => {
      console.log(error);
    });
  } 

  override ngOnInit(): void {

    this.initializeData();
    this.getById();
    
  }

}