import { Component, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Subject, takeUntil } from 'rxjs';
import { DashboardService } from '../../services/dashboard.service';
import { IAppointment } from '../../../interfaces/appointment.interface';

@Component({
  selector: 'widget-worksheet',
  imports: [MatIconModule],
  templateUrl: './worksheet.component.html',
  styleUrl: './worksheet.component.scss'
})
export class WorksheetComponent {
  dashboardService = inject(DashboardService)
  appointments = signal<IAppointment[]>([]);
  isAppointmentsLoading = signal<boolean>(true);
  destroy = new Subject<void>();

  ngOnInit(): void {
    this.loadTiles();
  }

  loadTiles(): void {
    this.isAppointmentsLoading.set(true);
    this.dashboardService.getAppointments().pipe(takeUntil(this.destroy)).subscribe(
      (data) => {
        this.appointments.set(data);
        this.isAppointmentsLoading.set(false);
      }
    );
  }

  ngOnDestroy(): void {
    this.destroy.next();
    this.destroy.complete();
  }
}
