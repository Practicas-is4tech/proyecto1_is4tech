import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DogsComponent } from './Components/dogs/dogs.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { DogsService } from './services/dogs-service.service';
import { WhiteSpaceDirective } from '../shared/Directives/white-space.directive';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    DogsComponent,
    SharedModule,
    FormsModule,
    WhiteSpaceDirective,
    
  ]
})
export class AdminModule { }
