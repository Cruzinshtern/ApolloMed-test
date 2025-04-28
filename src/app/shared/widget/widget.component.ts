import { Component, input, InputSignal } from '@angular/core';

@Component({
  selector: 'apollo-widget',
  imports: [],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss'
})
export class WidgetComponent {
  title: InputSignal<string | undefined> = input<string>()
  background: InputSignal<string> = input<string>('bg-white')
}
