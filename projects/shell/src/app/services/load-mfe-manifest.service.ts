import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomManifest } from '../utils/config';

@Injectable({
  providedIn: 'root',
})
export class LoadManifestService {
  constructor() {}

  // not using but need to impliment later
  getManifestConfig(): Observable<CustomManifest> {
    return of({
      flights_widget: {
        remoteEntry: 'http://localhost:5201/remoteEntry.js',
        exposedModule: './Module',
        displayName: 'Flights',
        routePath: 'flights',
        ngModuleName: 'FlightsModule',
        type: 'module',
      },
      booking_widget: {
        remoteEntry: 'http://localhost:5202/remoteEntry.js',
        exposedModule: './Module',
        displayName: 'Bookings',
        routePath: 'bookings',
        ngModuleName: 'BookingsModule',
        type: 'module',
      },
    });
  }
}
