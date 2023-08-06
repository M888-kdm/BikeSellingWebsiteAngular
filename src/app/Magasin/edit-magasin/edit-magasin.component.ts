import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MagasinService } from 'src/app/Service/magasin.service';
import { AddMagasinComponent, MagasinForm } from '../add-magasin/add-magasin.component';

@Component({
  selector: 'edit-magasin',
  templateUrl: '../add-magasin/add-magasin.component.html',
  styleUrls: ['../add-magasin/add-magasin.component.scss']
})

export class EditMagasinComponent extends AddMagasinComponent implements OnInit {

  constructor(private route: ActivatedRoute, router: Router, magasinService: MagasinService) {
    super(router, magasinService);
  }

  override ngOnInit(): void {
    this.entityId = this.route.snapshot.params['magasinId'];
    this.getById();
  }
  
}