import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/internal/operators/catchError';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebApiService {

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }), 
  };

  private apiUrl = "http://localhost:8080/VenteDeVelos-1.0-SNAPSHOT/api";

  constructor(private http: HttpClient) { }

  // GET request
  public get(endpoint: string, number?:any): Observable<any> {
    var url;
    if(number != null){
      url = `${this.apiUrl}/${endpoint}/${number}`;
    }
    else{
      url = `${this.apiUrl}/${endpoint}`;
    }

    return this.http.get(url, this.httpOptions).pipe(
      map((response: any) => this.ReturnResponseData(response)),
      catchError(this.handleError)
    );
  }

  // PUT request
  public put(endpoint: string, data: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}`;
    return this.http.put(url, data, this.httpOptions).pipe(
      map((response: any) => this.ReturnResponseData(response)),
      catchError(this.handleError)
    );
  }

  // DELETE request
  public delete(endpoint: string, number: any): Observable<any> {
    const url = `${this.apiUrl}/${endpoint}/${number}`;
    return this.http.delete(url).pipe(
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
