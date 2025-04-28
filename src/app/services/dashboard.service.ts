import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GENERAL_INFO_TILES } from '../../mocks/generalInfoTiles';
import { ITile } from '../../interfaces/tile.interface';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  getGeneralInfoTiles(): Observable<ITile[]> {
    return of(GENERAL_INFO_TILES)
  }
}
