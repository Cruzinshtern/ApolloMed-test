import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GENERAL_INFO_TILES } from '../../mocks/generalInfoTiles';
import { ITile } from '../../interfaces/tile.interface';
import { PERSONAL_INFO_TILES } from '../../mocks/personalInfoTiles';
import { IPatient } from '../../interfaces/patient.interface';
import { LAST_PATIENTS } from '../../mocks/lastPatients';
import { IAppointment } from '../../interfaces/appointment.interface';
import { APPOINTMENTS } from '../../mocks/appointments';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getGeneralInfoTiles(): Observable<ITile[]> {
    return of(GENERAL_INFO_TILES)
  }

  getPersonalInfoTiles(): Observable<ITile[]> {
    return of(PERSONAL_INFO_TILES)
  }

  getLastPatients(): Observable<IPatient[]> {
    return of(LAST_PATIENTS)
  }

  getAppointments(): Observable<IAppointment[]> {
    return of(APPOINTMENTS)
  }
}
