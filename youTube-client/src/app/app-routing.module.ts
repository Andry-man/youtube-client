import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { NofoundComponent } from './components/nofound/nofound.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { AuthGuard } from './auth.guard';
import { LoadindGuardGuard } from './loadind-guard.guard';
import { HomePageComponent } from './components/home-page/home-page.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent},
  { path: 'settings', component: SearchResultsComponent},
  { path: 'user/:id', component: UserPageComponent},
  { path: 'card/:more', component: SearchResultsComponent},

  { path: 'admin',
    loadChildren: () => import('./module/admin/admin.module').then(m => m.AdminModule),
    canLoad: [ LoadindGuardGuard ],
  },



  { path: '**', component: NofoundComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
