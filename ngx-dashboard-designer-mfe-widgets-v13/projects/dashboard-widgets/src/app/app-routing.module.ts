import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'widgets',
    pathMatch: 'full',
  },
  {
    path: 'widgets',
    loadChildren: () =>
      import('./widgets/widgets.module').then(
        (m) => m.WidgetsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
