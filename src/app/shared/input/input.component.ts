import { Component, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'apollo-input',
  imports: [MatIconModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  placeholder = input<string>();
  showSearchIcon = input<boolean>(false);
  showMicro = input<boolean>(false);
  type = input<'text' | 'radio' | 'datetime'>('text');
  radioList = input<any[]>([])
  value = input<string>('')
}
