import { Component, computed, input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'apollo-tile',
  imports: [MatIconModule],
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.scss'
})
export class TileComponent {
  title = input.required<string>();
  icon = input.required<string>();
  isGeneralInfo = input<boolean>(false);
  isLast = input<boolean>(false)

  iconContainerClasses = computed(() => {
    let classes = 'h-[40px] w-[40px] flex justify-center items-center rounded-md shadow-sm cursor-pointer';
    if (this.isGeneralInfo()) {
      classes += ' bg-gradient-to-b from-gray-300 to-gray-200';
    } else {
      classes += ' bg-gray-300';
    }
    if (this.isLast()) {
      classes += ' !bg-transparent b border border-gray-300'
    }
    return classes;
  });
}
