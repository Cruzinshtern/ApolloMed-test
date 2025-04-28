import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { InputComponent } from '../../shared/input/input.component';
import { DashboardService } from '../../services/dashboard.service';
import { Subject, takeUntil } from 'rxjs';
import { IPatient } from '../../../interfaces/patient.interface';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'widget-last-patients',
  imports: [InputComponent, MatIconModule],
  templateUrl: './last-patients.component.html',
  styleUrl: './last-patients.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LastPatientsComponent {
  dashboardService = inject(DashboardService)
  patients = signal<IPatient[]>([]);
  isPatientsLoading = signal<boolean>(true);
  destroy = new Subject<void>();

  ngOnInit(): void {
    this.loadTiles();
  }

  loadTiles(): void {
    this.isPatientsLoading.set(true);
    this.dashboardService.getLastPatients().pipe(takeUntil(this.destroy)).subscribe(
      (data) => {
        this.patients.set(data);
        this.isPatientsLoading.set(false);
      }
    );
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
