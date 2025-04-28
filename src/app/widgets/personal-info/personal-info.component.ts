import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { ITile } from '../../../interfaces/tile.interface';
import { DashboardService } from '../../services/dashboard.service';
import { TileComponent } from '../../shared/tile/tile.component';

@Component({
  selector: 'widget-personal-info',
  imports: [TileComponent],
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalInfoComponent {
  dashboardService = inject(DashboardService)
  tiles = signal<ITile[]>([]);
  isTilesLoading = signal<boolean>(true);
  destroy = new Subject<void>();

  ngOnInit(): void {
    this.loadTiles();
  }

  loadTiles(): void {
    this.isTilesLoading.set(true);
    this.dashboardService.getPersonalInfoTiles().pipe(takeUntil(this.destroy)).subscribe(
      (data) => {
        this.tiles.set([...data, {title: '', icon: 'add'}]);
        this.isTilesLoading.set(false);
      }
    );
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
