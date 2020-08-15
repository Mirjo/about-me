import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'side-projects',
    loadChildren: () => import('./pages/side-projects/side-projects.module').then(m => m.SideProjectsModule)
  },
  {
    path: 'know-how',
    loadChildren: () => import('./pages/know-how/know-how.module').then(m => m.KnowHowModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
