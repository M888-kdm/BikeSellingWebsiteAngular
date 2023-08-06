import { Injectable } from '@angular/core';
import { WebApiService } from './web-api.service';
import { Observable } from 'rxjs';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService extends BaseService{

  constructor(webApiService: WebApiService) { 
    super(webApiService);
    this.endpoint = "produit";
  }

}
