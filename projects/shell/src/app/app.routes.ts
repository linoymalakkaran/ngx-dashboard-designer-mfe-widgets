import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ConfigComponent } from './config/config.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },
    {
      path: 'config',
      component: ConfigComponent
    },
    // {
    //   path: 'flights',
    //   loadChildren: () => loadRemoteModule({
    //       type: 'manifest',
    //       remoteName: 'flights_widget',
    //       exposedModule: './Module'
    //     })
    //     .then(m => m.FlightsModule)
    // },
    // {
    //   path: 'bookings',
    //   loadChildren: () => loadRemoteModule({
    //       type: 'manifest',
    //       remoteName: 'booking_widget',
    //       exposedModule: './Module'
    //     })
    //     .then(m => m.BookingsModule)
    // },
];
