import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MarqueService } from 'src/app/Service/marque.service';
import { AddMarqueComponent } from '../add-marque/add-marque.component';

@Component({
  selector: 'edit-marque',
  templateUrl: '../add-marque/add-marque.component.html',
  styleUrls: ['../add-marque/add-marque.component.scss']
})

export class EditMarqueComponent extends AddMarqueComponent implements OnInit {

  constructor(private route: ActivatedRoute, router: Router, marqueService: MarqueService) {
    super(router, marqueService);
  }

  override ngOnInit(): void {
    this.entityId = this.route.snapshot.params['marqueId'];
    this.getById();
  }
  
}