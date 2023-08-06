import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-entity',
  templateUrl: './add-entity.component.html',
  styleUrls: ['./add-entity.component.scss']
})
export class AddEntityComponent implements OnInit{

  protected service: any;
  protected entityForm: any;
  protected entityUrl: string = "";
  protected entityId: any;


  isSubmitted: boolean = false;

  constructor(protected router: Router){}

  ngOnInit(): void {
  }

  protected getById(){
    this.service.get(this.entityId).subscribe((data: any) => {
      console.log(data);
      for (const key in this.entityForm){
        this.entityForm[key] = data[key];
      }
    })
  }

  public PutEntity(isValid: any){
    this.isSubmitted = true;
    if(isValid){
      this.service.create(this.entityForm).subscribe(async (data: any) => {
        this.router.navigate([this.entityUrl]);
      }, async (error: any) => {
        console.log(error);
      })
    }
  }
}
