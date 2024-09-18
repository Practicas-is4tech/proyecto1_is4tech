import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DogsComponent } from './Components/dogs/dogs.component';
import { SharedModule } from '../shared/shared.module';
import { DogsService } from './services/dogs-service.service';
import { FormsModule, NgModel } from '@angular/forms';



@NgModule({
  declarations: [
    DogsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    FormsModule,
    SharedModule
  ]
})
export class AdminModule { }
