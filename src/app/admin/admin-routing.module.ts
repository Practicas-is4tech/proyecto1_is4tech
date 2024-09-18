import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DogsComponent } from './Components/dogs/dogs.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dogs', component: DogsComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
