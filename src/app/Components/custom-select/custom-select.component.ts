import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent {
  @Input() options: string[] = [];
  @Input() selectedValue: string = '';
}
