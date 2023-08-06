import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-table',
  templateUrl: './base-table.component.html',
  styleUrls: ['./base-table.component.scss']
})
export class BaseTableComponent {

  constructor(private router:Router){}

  @Input() data: any[] = [];
  @Input() columns: string[] = [];
  @Input() new_button_action: Function = () => {};
  @Input() delete_button_action: Function = () => {};
  @Input() editPath: string = "";
  @Input() fields: Function[] = [];
  
}
