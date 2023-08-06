import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(protected webApiService: WebApiService) { }

  protected endpoint: string = "";

  public get(number?: any): Observable<any> {
    if(number != null)
      return this.webApiService.get(this.endpoint, number);
    return this.webApiService.get(this.endpoint);
  }

  public create(data: any): Observable<any> {
    return this.webApiService.put(this.endpoint, data);
  }

  public delete(number: any): Observable<any> {
    return this.webApiService.delete(this.endpoint, number);
  }

}