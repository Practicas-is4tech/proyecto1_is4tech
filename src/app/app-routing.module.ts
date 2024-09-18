import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [

  {
    path: '', redirectTo: '', pathMatch: 'full'
  },
  {
    path: 'security', loadChildren: () => import('./security/security.module').then(m => m.SecurityModule)
  },
  {
    path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
