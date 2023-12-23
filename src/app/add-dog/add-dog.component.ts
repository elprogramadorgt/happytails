import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-dog',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './add-dog.component.html',
  styleUrl: './add-dog.component.scss',
})
export class AddDogComponent {
  addDogForm: FormGroup;

  constructor() {
    this.addDogForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      breed: new FormControl('', []),
      age: new FormControl('', []),
      availability: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  addDog() {
    console.log(this.addDogForm.controls);
  }
}
