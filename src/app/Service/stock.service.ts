import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { WebApiService } from './web-api.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  constructor(private webApiService: WebApiService, private http: HttpClient) { }

  private stockEndpoint = "stock";

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), 
  };

  private apiUrl = "http://localhost:8080/VenteDeVelos-1.0-SNAPSHOT/api";


  public get(magasin?: any, produit?:any): Observable<any> {
    var url:string = "";

    if(magasin != null && produit != null){
      url = `${this.apiUrl}/stock/${magasin}/${produit}`;
      return this.http.get(url, this.httpOptions).pipe(
        map((response: any) => this.ReturnResponseData(response)),
        catchError(this.handleError)
      );
    }
     
    return this.webApiService.get(this.stockEndpoint);
  }

  public create(data: any): Observable<any>  {
    console.log(data);
    return this.webApiService.put(this.stockEndpoint, data);
  }

  public delete(magasin?: any, produit?:any): Observable<any> {
    var url = `${this.apiUrl}/stock/${magasin}/${produit}`;
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