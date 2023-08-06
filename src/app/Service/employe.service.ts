import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeService extends BaseService {

  constructor(webApiService: WebApiService) { 
    super(webApiService);
    this.endpoint = "employe";
  }

}
