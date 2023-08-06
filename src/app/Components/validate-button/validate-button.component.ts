import { Component, Input } from '@angular/core';

@Component({
  selector: 'validate-button',
  templateUrl: './validate-button.component.html',
  styleUrls: ['./validate-button.component.scss']
})
export class ValidateButtonComponent {
  @Input() click: any = null;
}
