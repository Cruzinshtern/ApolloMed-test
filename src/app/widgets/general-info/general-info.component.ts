import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { DashboardService } from '../../services/dashboard.service';
import { ITile } from '../../../interfaces/tile.interface';
import { Subject, takeUntil } from 'rxjs';
import { TileComponent } from "../../shared/tile/tile.component";

@Component({
  selector: 'widget-general-info',
  imports: [TileComponent],
  templateUrl: './general-info.component.html',
  styleUrl: './general-info.component.scss',
  standalone: true
})
export class GeneralInfoComponent implements OnInit, OnDestroy {
  dashboardService = inject(DashboardService)
  tiles = signal<ITile[]>([]);
  isTilesLoading = signal<boolean>(true);
  destroy = new Subject<void>();

  ngOnInit(): void {
    this.loadTiles();
  }

  loadTiles(): void {
    this.isTilesLoading.set(true);
    this.dashboardService.getGeneralInfoTiles().pipe(takeUntil(this.destroy)).subscribe(
      (data) => {
        this.tiles.set(data);
        this.isTilesLoading.set(false);
      }
    );
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }

}
