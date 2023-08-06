import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeService } from 'src/app/Service/employe.service';
import { MagasinService } from 'src/app/Service/magasin.service';
import { AddEmployeComponent, EmployeForm } from '../add-employe/add-employe.component';

@Component({
  selector: 'edit-employe',
  templateUrl: '../add-employe/add-employe.component.html',
  styleUrls: ['../add-employe/add-employe.component.scss']
})

export class EditEmployeComponent extends AddEmployeComponent implements OnInit {

  constructor(private route: ActivatedRoute, router: Router, employeService: EmployeService, magasinService: MagasinService) {
    super(router, employeService, magasinService);
  }

  override ngOnInit(): void {
    this.entityId = this.route.snapshot.params['employeId'];
    this.getById();
    this.magasinService.get().subscribe((data: any) => {
      this.magasins = data;
    })
    this.employeService.get().subscribe((data: any) => {
      this.managers = data;
    });
  }
}