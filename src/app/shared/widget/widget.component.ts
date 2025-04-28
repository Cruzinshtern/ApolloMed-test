import { Component, input, InputSignal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'apollo-widget',
  imports: [MatIconModule],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent {
  title: InputSignal<string | undefined> = input<string>()
  chips: InputSignal<any[] | undefined> = input<any[]>()
  background: InputSignal<string> = input<string>('bg-white')
}
