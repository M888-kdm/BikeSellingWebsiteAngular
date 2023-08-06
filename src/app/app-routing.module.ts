import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './Product/view/view.component';
import { AddComponent } from './Product/add/add.component';
import { EditComponent } from './Product/edit/edit.component';
import { AddMarqueComponent } from './Marque/add-marque/add-marque.component';
import { ViewMarqueComponent } from './Marque/view-marque/view-marque.component';
import { EditMarqueComponent } from './Marque/edit-marque/edit-marque.component';
import { AddCategorieComponent } from './Categorie/add-categorie/add-categorie.component';
import { EditCategorieComponent } from './Categorie/edit-categorie/edit-categorie.component';
import { ViewCategorieComponent } from './Categorie/view-categorie/view-categorie.component';
import { AddMagasinComponent } from './Magasin/add-magasin/add-magasin.component';
import { ViewMagasinComponent } from './Magasin/view-magasin/view-magasin.component';
import { EditMagasinComponent } from './Magasin/edit-magasin/edit-magasin.component';
import { ViewEmployeComponent } from './Employe/view-employe/view-employe.component';
import { AddEmployeComponent } from './Employe/add-employe/add-employe.component';
import { EditEmployeComponent } from './Employe/edit-employe/edit-employe.component';
import { ViewCommandeComponent } from './Commande/view-commande/view-commande.component';
import { AddCommandeComponent } from './Commande/add-commande/add-commande.component';
import { EditCommandeComponent } from './Commande/edit-commande/edit-commande.component';
import { EditStockComponent } from './Stock/edit-stock/edit-stock.component';
import { AddStockComponent } from './Stock/add-stock/add-stock.component';
import { ViewStockComponent } from './Stock/view-stock/view-stock.component';
import { ViewArticleCommandeComponent } from './ArticleCommande/view-article-commande/view-article-commande.component';
import { AddArticleCommandeComponent } from './ArticleCommande/add-article-commande/add-article-commande.component';
import { EditArticleCommandeComponent } from './ArticleCommande/edit-article-commande/edit-article-commande.component';
import { ViewClientComponent } from './Client/view-client/view-client.component';
import { AddClientComponent } from './Client/add-client/add-client.component';
import { EditClientComponent } from './Client/edit-client/edit-client.component';

const routes: Routes = [
  { path: '', redirectTo: 'product', pathMatch: 'full'},
  { path: 'product', component: ViewComponent },
  { path: 'product/add', component: AddComponent },
  { path: 'product/edit/:productId', component: EditComponent },
  { path: 'marque', component: ViewMarqueComponent },
  { path: 'marque/add', component: AddMarqueComponent },
  { path: 'marque/edit/:marqueId', component: EditMarqueComponent },
  { path: 'categorie', component: ViewCategorieComponent },
  { path: 'categorie/add', component: AddCategorieComponent },
  { path: 'categorie/edit/:categorieId', component: EditCategorieComponent },
  { path: 'magasin', component: ViewMagasinComponent },
  { path: 'magasin/add', component: AddMagasinComponent },
  { path: 'magasin/edit/:magasinId', component: EditMagasinComponent },
  { path: 'employe', component: ViewEmployeComponent },
  { path: 'employe/add', component: AddEmployeComponent },
  { path: 'employe/edit/:employeId', component: EditEmployeComponent },
  { path: 'stock', component: ViewStockComponent },
  { path: 'stock/add', component: AddStockComponent },
  { path: 'stock/edit/:magasinId/:productId', component: EditStockComponent },
  { path: 'client', component: ViewClientComponent },
  { path: 'client/add', component: AddClientComponent },
  { path: 'client/edit/:clientId', component: EditClientComponent },
  { path: 'commande', component: ViewCommandeComponent },
  { path: 'commande/add', component: AddCommandeComponent },
  { path: 'commande/edit/:commandeId', component: EditCommandeComponent },
  { path: 'article', component: ViewArticleCommandeComponent },
  { path: 'article/add', component: AddArticleCommandeComponent },
  { path: 'article/edit/:commandeId/:ligne', component: EditArticleCommandeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
