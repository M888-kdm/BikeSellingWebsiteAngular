import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { WebApiService } from './web-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleCommandeService {

  constructor(private webApiService: WebApiService, private http: HttpClient) { }

  private articleCommandeEndpoint = "articleCommande";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), 
  };

  private apiUrl = "http://localhost:8080/VenteDeVelos-1.0-SNAPSHOT/api";


  public get(commande?: any, ligne?:any): Observable<any> {
    var url:string = "";

    if(commande != null && ligne != null){
      url = `${this.apiUrl}/articleCommande/${commande}/${ligne}`;
      return this.http.get(url, this.httpOptions).pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
    }
     
    return this.webApiService.get(this.articleCommandeEndpoint);
  }

  public create(data: any): Observable<any>  {
    console.log(data);
    return this.webApiService.put(this.articleCommandeEndpoint, data);
  }

  public delete(commande?: any, ligne?:any): Observable<any> {
    var url = `${this.apiUrl}/articleCommande/${commande}/${ligne}`;
    return this.http.delete(url, this.httpOptions).pipe(
      map((response: any) => this.ReturnResponseData(response)),
      catchError(this.handleError)
    );
  }

  private ReturnResponseData(response: any) {
    return response;
  }
  private handleError(error: any) {
    return throwError(error);
  }
  
}