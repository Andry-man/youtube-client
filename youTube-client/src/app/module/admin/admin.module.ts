import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminPageComponent } from './admin-page/admin-page.component';

const routes: Routes = [
  { path: '', component: AdminPageComponent },
];

@NgModule({
  declarations: [
    AdminPageComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
  ]

})
export class AdminModule { }
