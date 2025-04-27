import { Component, input } from '@angular/core';

@Component({
  selector: 'apollo-input',
  imports: [],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  placeholder = input.required<string>();
}
