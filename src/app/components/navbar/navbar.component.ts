import { ChangeDetectionStrategy, Component, signal, WritableSignal } from '@angular/core';
import { InputComponent } from '../../shared/input/input.component';

@Component({
  selector: 'app-navbar',
  imports: [InputComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent {
  showUserMenu: WritableSignal<boolean> = signal<boolean>(false)

  toggleShowUserMenu() {
    this.showUserMenu.update((currentValue) => !currentValue);
  }
}
