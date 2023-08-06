import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AddComponent } from './Product/add/add.component';
import { ViewComponent } from './Product/view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './Product/edit/edit.component';
import { AddMarqueComponent } from './Marque/add-marque/add-marque.component';
import { EditMarqueComponent } from './Marque/edit-marque/edit-marque.component';
import { ViewMarqueComponent } from './Marque/view-marque/view-marque.component';
import { AddCategorieComponent } from './Categorie/add-categorie/add-categorie.component';
import { EditCategorieComponent } from './Categorie/edit-categorie/edit-categorie.component';
import { ViewCategorieComponent } from './Categorie/view-categorie/view-categorie.component';
import { AddEmployeComponent } from './Employe/add-employe/add-employe.component';
import { ViewEmployeComponent } from './Employe/view-employe/view-employe.component';
import { EditEmployeComponent } from './Employe/edit-employe/edit-employe.component';
import { EditMagasinComponent } from './Magasin/edit-magasin/edit-magasin.component';
import { AddMagasinComponent } from './Magasin/add-magasin/add-magasin.component';
import { ViewMagasinComponent } from './Magasin/view-magasin/view-magasin.component';
import { ViewStockComponent } from './Stock/view-stock/view-stock.component';
import { EditStockComponent } from './Stock/edit-stock/edit-stock.component';
import { AddStockComponent } from './Stock/add-stock/add-stock.component';
import { ViewCommandeComponent } from './Commande/view-commande/view-commande.component';
import { AddCommandeComponent } from './Commande/add-commande/add-commande.component';
import { EditCommandeComponent } from './Commande/edit-commande/edit-commande.component';
import { AddClientComponent } from './Client/add-client/add-client.component';
import { EditClientComponent } from './Client/edit-client/edit-client.component';
import { ViewClientComponent } from './Client/view-client/view-client.component';
import { AddArticleCommandeComponent } from './ArticleCommande/add-article-commande/add-article-commande.component';
import { EditArticleCommandeComponent } from './ArticleCommande/edit-article-commande/edit-article-commande.component';
import { ViewArticleCommandeComponent } from './ArticleCommande/view-article-commande/view-article-commande.component';
import { CustomSelectComponent } from './Components/custom-select/custom-select.component';
import { CustomContainerComponent } from './Components/custom-container/custom-container.component';
import { ValidateButtonComponent } from './Components/validate-button/validate-button.component';
import { BaseTableComponent } from './Components/base-table/base-table.component';
import { EditEntityComponent } from './Entity/edit-entity/edit-entity.component';
import { ViewEntityComponent } from './Entity/view-entity/view-entity.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    AddMarqueComponent,
    EditMarqueComponent,
    ViewMarqueComponent,
    AddCategorieComponent,
    EditCategorieComponent,
    ViewCategorieComponent,
    AddEmployeComponent,
    ViewEmployeComponent,
    EditEmployeComponent,
    EditMagasinComponent,
    AddMagasinComponent,
    ViewMagasinComponent,
    AddStockComponent,
    ViewStockComponent,
    EditStockComponent,
    ViewCommandeComponent,
    AddCommandeComponent,
    EditCommandeComponent,
    AddClientComponent,
    EditClientComponent,
    ViewClientComponent,
    AddArticleCommandeComponent,
    EditArticleCommandeComponent,
    ViewArticleCommandeComponent,
    CustomSelectComponent,
    CustomContainerComponent,
    ValidateButtonComponent,
    BaseTableComponent,
    EditEntityComponent,
    ViewEntityComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
