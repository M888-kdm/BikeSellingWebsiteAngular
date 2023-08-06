import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/Service/client-service.service';
import { AddClientComponent } from '../add-client/add-client.component';

@Component({
  selector: 'edit-client',
  templateUrl: '../add-client/add-client.component.html',
  styleUrls: ['../add-client/add-client.component.scss']
})

export class EditClientComponent extends AddClientComponent implements OnInit {

  constructor(private route: ActivatedRoute, router: Router, clientService: ClientService) {
    super(router, clientService);
  }

  override ngOnInit(): void {
    this.entityId = this.route.snapshot.params['clientId'];
    this.getById();
  }
  
}