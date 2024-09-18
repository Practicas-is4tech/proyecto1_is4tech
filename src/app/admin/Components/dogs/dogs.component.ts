import { Component, OnInit } from '@angular/core';
import { DogsService } from '../../services/dogs-service.service';
import { FormsModule, NgModel } from '@angular/forms';
import { WhiteSpaceDirective } from '../../../shared/Directives/white-space.directive';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss']
})
export class DogsComponent implements OnInit {

  imgRandom: string | null = null;
  textArea1: string = '';

  constructor(private dogsService: DogsService) { }

  ngOnInit(): void {
    this.fetchDogImage();
  }

  fetchDogImage(): void {
    this.dogsService.getRandomDogImage().subscribe(data => {
      this.imgRandom = data.message;
    });
  }

  getNewDogImage(): void {
    this.fetchDogImage();
  }
}
